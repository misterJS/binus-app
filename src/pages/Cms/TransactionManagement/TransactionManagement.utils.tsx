import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParams } from "../../../shared";
import { getActiveTransaction, getApproveTransaction, getRejectTransaction } from "../../../store/admin";

export const useTransactionManagement = () => {
    const dispatch = useDispatch()
    const { set, status, slug, tab } = useQueryParams();
    const transactions = useSelector((state: any) => state.admin.adminTransaction.activeTransactions)
    const resultCode = useSelector((state: any) => state.admin.adminTransaction.resultCode);

    const setParams = (key: string, value: string) => {
        set(key, value)
    }

    const user = JSON.parse(localStorage.getItem('userData') as any)

    useEffect(() => {
        const action = resultCode !== 200
            ? tab === 'active' ? getRejectTransaction({ userIn: user?.email, id: "1" })
                : getApproveTransaction({ userIn: user?.email, id: "1" })
            : getActiveTransaction({ userIn: user?.email, status: tab });

        dispatch(action);
    }, [transactions, status, user?.email, tab, resultCode]);

    return {
        transactionManagementList: transactions,
        setParams
    }
}  