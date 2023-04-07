import { Control, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

interface TextFieldWithControllerProps {
    name: string;
    control: Control<any>;
    label: string;
    placeholder?: string;
}

const TextFieldWithController = ({ name, control, label, placeholder }: TextFieldWithControllerProps) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <TextField
                {...field}
                sx={{ marginBottom: 2 }}
                placeholder={placeholder}
                onBlur={(e) => field.onChange(e.target.value)}
                type="text"
                size="small"
                fullWidth
                label={label}
            />
        )}
    />
);

export default TextFieldWithController;
