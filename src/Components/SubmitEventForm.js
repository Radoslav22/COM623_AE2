import * as React from 'react';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { TextField } from '@mui/material';
import CustomButton from './Button';
import { useForm } from "react-hook-form";



function SubmitForm(props) {
    const { onSubmit } = props;
    const eventFormSchema = yup
        .object({
            event: yup.string().required("you must define event name"),
            notes: yup.string().required("you must tell more about your event"),
            date: yup.string().required("you must define date"),
            stime: yup.string().required("you must define start time"),
            etime: yup.string().required("you must define end time"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(eventFormSchema),
        defaultValues: { event: "", notes: "", date: "", stime: "", etime: "" },
    });
    const onFormSubmit = (data) => {

        onSubmit({ ...data });
    };
    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <List >

                    <ListItem disablePadding >
                        <ListItem sx={{ marginLeft: 10 }}>

                            <TextField


                                required

                                id="event"
                                label="Name Event"
                                name="event"
                                autoComplete="event"
                                type='text'
                                autoFocus
                                {...register("event")}
                            />



                            <ListItemText />
                        </ListItem>
                    </ListItem>

                </List>
                <Divider />
                <ListItem disablePadding>
                    <ListItem sx={{ marginLeft: 10 }}>
                        <TextField

                            required

                            name="notes"
                            label="Event notes"
                            type="text"
                            id="notes"
                            autoComplete="notes-event"
                            {...register("notes")}
                        />


                        <ListItemText />
                    </ListItem>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItem sx={{ marginLeft: 10 }}>
                        <TextField

                            required

                            name="date"
                            label="Event Date"
                            type="date"
                            id="date"
                            autoComplete="date"
                            {...register('date')}

                        />


                        <ListItemText />
                    </ListItem>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItem sx={{ marginLeft: 5 }}>
                        <TextField

                            required

                            name="stime"
                            label="Start time"
                            type="time"
                            id="stime"
                            autoComplete="stime"
                            {...register("stime")}
                        />
                        <TextField

                            required

                            name="etime"
                            label="End time"
                            type="time"
                            id="etime"
                            autoComplete="etime"
                            {...register("etime")}
                        />


                        <ListItemText />
                    </ListItem>
                </ListItem>
                <Divider />
                <List>
                    <ListItemIcon>
                        <CustomButton text='Create Event' type='submit'></CustomButton>

                    </ListItemIcon>
                </List>
            </form>
        </div>
    )
}

export default SubmitForm;