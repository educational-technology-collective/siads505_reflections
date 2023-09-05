import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Stack,
    Typography,
    Box,
    Grid,
    TextareaAutosize,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';


function Week3Intro3() {

    const [hint, setHint] = useState('');
    const [showInstructions, setShowInstructions] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleSubmit = () => {
        if (hint.length > 10) {
            setShowInstructions(true);
        } else {
            setOpenDialog(true);
        }
    };

    return (
        <Stack spacing={2}>
            <Box p={3}>
                <Typography variant="h4" gutterBottom>
                    Assignment 3 Reflection Instruction
                </Typography>
                <Typography paragraph style={{fontSize: 18}}>
                    Well done on submitting two of the four programming
                    assignments!
                    Before moving on to the next module, here is a reflection
                    assignment to revise some of the concepts learned so far.
                </Typography>
                <Typography paragraph style={{fontSize: 18}}>
                    In this assignment, you will identify the mistakes in an
                    incorrect solution to
                    <b> Question 4 from Assignment 3 </b>
                    and
                    <b> write a hint such that someone who wrote the incorrect
                        solution can use it to identify their mistake and fix
                        their code.
                    </b>
                </Typography>
                <Typography paragraph style={{fontSize: 18}}>
                    This activity will encourage you to think critically, learn
                    from
                    mistakes, and help improve your problem-solving skills!
                </Typography>
                <Box border={1} borderColor="grey.300" borderRadius={4} p={2}
                     mb={3}>
                    <Typography paragraph style={{fontSize: 18}}>
                        Here are some
                        <b> tips for writing a hint </b>
                        for a student. A good
                        hint:
                        <ul style={{listStyleType: 'disc', marginLeft: '10px'}}>
                            <li>Provides information to help the student achieve
                                the correct
                                response without giving away the complete
                                solution.
                            </li>
                            <li>Provides information about how and where the
                                incorrect code
                                does or does not meet the assignment goals,
                                e.g., how the
                                code reflects a misunderstanding related to the
                                dataset or
                                the problem statement.
                            </li>
                        </ul>
                    </Typography>
                </Box>
                <Typography paragraph style={{fontSize: 18}}>
                    <b> Let's go through a simple example </b>
                    to learn more about this exercise. Consider the first
                    question
                    of assignment two, which required you to write a function
                    called
                    <code> ‘proportion_of_education’</code>, which returns the
                    proportion of
                    children in the dataset who had a mother with the four types
                    of
                    levels of education. Below, you will see a correct and an
                    incorrect solution to this question:
                </Typography>
                <img
                    src="https://raw.githubusercontent.com/maizehsu/FigureBed/main/asset/2023/08/22/20230822095525.png"
                    alt="Example Solution"
                    style={{width: '100%'}}/>
            </Box>

            <Box p={2.5}>
                <Typography paragraph style={{fontSize: 18}}>A good hint for
                    Solution A would
                    be:</Typography>
                <Typography paragraph style={{color: 'green', fontSize: 18}}>
                    Check the use of the filter df["C5R"]==1. Why is
                    this filter needed to calculate the total number of
                    all children in the dataset?
                </Typography>
                <Typography paragraph style={{fontSize: 18}}>A bad hint would
                    be:</Typography>
                <Typography paragraph style={{color: 'red', fontSize: 18}}>
                    To fix your solution, remove the filter df["C5R"]==1
                    for the computation of a1.
                </Typography>
                <Link to="/week3-group3">
                    <Button variant="contained" color="primary">
                        Next
                    </Button>
                </Link>
            </Box>

        </Stack>
    )
        ;
}


export default Week3Intro3;