import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Button,
    TextField,
    Box,
    Typography,
    Paper,
    Container
} from '@mui/material';
import { useSurveyData } from "../../SurveyDataContext";

function hashEmail(email) {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
        hash = (hash << 5) - hash + email.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

function Week3EmailForm() {
    const [email, setEmail] = useState('');
    const { data, setData } = useSurveyData();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const hashedValue = hashEmail(email);
        const route = ['/week3-intro1', '/week3-intro2', '/week3-intro3'][hashedValue % 3];

        setData({
            ...data,
            email: email,
        });

        navigate(route); // navigate to the calculated route
    };

    return (
        <Container component={Paper} maxWidth="sm"
                   style={{ padding: '24px', marginTop: '50px' }}>
            <Typography variant="h5" gutterBottom>
                Please enter your University of Michigan email
            </Typography>
            <Box component="form" onSubmit={handleSubmit} spacing={2}>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your-email@umich.edu"
                    label="University Email"
                    pattern="[a-zA-Z0-9._%+-]+@umich\.edu"
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '20px' }}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default Week3EmailForm;