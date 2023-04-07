import { Box, Checkbox, Chip, IconButton, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import { memo, useState } from "react"
import { visuallyHidden } from '@mui/utils';
import { DeleteBold, EditBold, InfoCircleBold } from "../../../../../assets/icon-apps";
import { DialogMui } from "../../../../../components/dialog/dialog-deactive";


interface Data {
    id: string;
    username: string;
    fullname: string;
    nim: string;
    university: string;
    yearClass: string;
    major: string;
    email: string;
    phoneNumber: string;
    userType: string;
    roleAs: string;
    url: string;
    status: string;
    rewardPoint: number;
    budgetPoint: number;
    projectStart: string;
    projectEnd: string;
}


function createData(
    id: string,
    username: string,
    fullname: string,
    nim: string,
    university: string,
    yearClass: string,
    major: string,
    email: string,
    phoneNumber: string,
    userType: string,
    roleAs: string,
    url: string,
    status: string,
    rewardPoint: number,
    budgetPoint: number,
    projectStart: string,
    projectEnd: string,
): Data {
    return {
        id,
        username,
        fullname,
        nim,
        university,
        yearClass,
        major,
        email,
        phoneNumber,
        userType,
        roleAs,
        url,
        status,
        rewardPoint,
        budgetPoint,
        projectStart,
        projectEnd
    };
}


const rows = [
    createData("1", "johndoe", "John Doe", "1234567", "University of XYZ", "2021", "Computer Science", "johndoe@example.com", "+1 555-1234", "Student", "User", "https://www.example.com/johndoe", "Active", 10, 1000, "2023-05-01", "2024-05-01"),
    createData("2", "janedoe", "Jane Doe", "2345678", "ABC Inc.", "2021", "Marketing", "janedoe@example.com", "+1 555-5678", "Employee", "Admin", "https://www.example.com/janedoe", "Inactive", 5, 500, "2022-10-01", "2023-10-01"),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'username',
        numeric: false,
        disablePadding: false,
        label: 'Username',
    },
    {
        id: 'fullname',
        numeric: false,
        disablePadding: false,
        label: 'Fullname',
    },
    {
        id: 'nim',
        numeric: false,
        disablePadding: false,
        label: 'NIM',
    },
    {
        id: 'university',
        numeric: false,
        disablePadding: false,
        label: 'Office/University',
    },
    {
        id: 'yearClass',
        numeric: true,
        disablePadding: false,
        label: 'Year Class',
    },
    {
        id: 'major',
        numeric: false,
        disablePadding: false,
        label: 'Major',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'Email',
    },
    {
        id: 'phoneNumber',
        numeric: false,
        disablePadding: false,
        label: 'Phone Number',
    },
    {
        id: 'userType',
        numeric: false,
        disablePadding: false,
        label: 'User Type',
    },
    {
        id: 'roleAs',
        numeric: false,
        disablePadding: false,
        label: 'Role As',
    },
    {
        id: 'url',
        numeric: false,
        disablePadding: false,
        label: 'URL',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'rewardPoint',
        numeric: true,
        disablePadding: false,
        label: 'Reward Point',
    },
    {
        id: 'budgetPoint',
        numeric: true,
        disablePadding: false,
        label: 'Budget Point',
    },
    {
        id: 'projectStart',
        numeric: false,
        disablePadding: false,
        label: 'Project Start',
    },
    {
        id: 'projectEnd',
        numeric: false,
        disablePadding: false,
        label: 'Project End',
    }
];


interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const ListReportMemo = () => {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Data>('username');
    const [selected, setSelected] = useState<readonly string[]>([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    return (
        <>
            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                >
                    <EnhancedTableHead
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="center">{row.username}</TableCell>
                                        <TableCell align="center">{row.fullname}</TableCell>
                                        <TableCell align="center">{row.nim}</TableCell>
                                        <TableCell align="center">{row.university}</TableCell>
                                        <TableCell align="center">{row.yearClass}</TableCell>
                                        <TableCell align="center">{row.major}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>
                                        <TableCell align="center">{row.phoneNumber}</TableCell>
                                        <TableCell align="center">{row.userType}</TableCell>
                                        <TableCell align="center">{row.roleAs}</TableCell>
                                        <TableCell align="center">{row.url}</TableCell>
                                        <TableCell align="center">
                                            <Chip
                                                label={row.status}
                                                component="button"
                                                color={row.status === "Active" ? "primary" : "warning"}
                                                clickable
                                            />
                                        </TableCell>
                                        <TableCell align="center">{row.rewardPoint}</TableCell>
                                        <TableCell align="center">{row.budgetPoint}</TableCell>
                                        <TableCell align="center">{row.projectStart}</TableCell>
                                        <TableCell align="center">{row.projectEnd}</TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: (dense ? 33 : 53) * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export const ListReport = memo(ListReportMemo)