import { Formik, Form } from 'formik';
import { GenerateReportJsonCommand } from '@/libs/backend';
import { Box, Button, TextField, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Add } from '@mui/icons-material';
import { TrSpinner } from '@/libs/ui';

interface JiraSoftwareFormValues {
    sprintName: string,
    boardName: string,
    queries: string,
    jiraToken: string
}
const initialValues: JiraSoftwareFormValues = {
    sprintName: '',
    boardName: '',
    queries: '',
    jiraToken: ''
}

const StyledBoxInput = styled(Box)({
    padding: "5px"
})

const StyledBoxButton = styled(Box)({
    marginTop: "0.5em",
    display: "flex",
    justifyContent: "end"
})

const StyledTextField = styled(TextField)({
})
interface JiraSoftwareFormProps {
    onSubmit: (jiraToken: string, command: GenerateReportJsonCommand) => void;
    isLoading: boolean;
}

const JiraSoftwareForm = (props: JiraSoftwareFormProps) => {

    const handleSubmit = (values: JiraSoftwareFormValues, actions) => {
        const command: GenerateReportJsonCommand = {
            sprintName: values.sprintName,
            boardName: values.boardName,
            queries: values.queries.split(',')
        }
        props.onSubmit(values.jiraToken, command);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        //     validate={values => {
        //         const errors = { sprintName: '', boardName: '', queries: '' };
        //         if (!values.sprintName) {
        //             errors.sprintName = '*Required';
        //         }
        //         if (!values.boardName) {
        //             errors.boardName = '*Required';
        //         }
        //         if (!values.queries) {
        //             errors.queries = '*Required';
        //         }
        //         return errors;
        //     }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                isValid
            }) => (
                <Form onSubmit={handleSubmit}>
                    <Grid container>
                        <Grid xs={6}>
                            <StyledBoxInput>
                                <StyledTextField
                                    id="sprintName"
                                    name="sprintName"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.sprintName}
                                    label="Sprint Name"
                                    fullWidth
                                    error={(errors.sprintName ? true : false) && touched.sprintName}
                                    helperText={errors.sprintName}
                                />
                            </StyledBoxInput>
                        </Grid>
                        <Grid xs={6}>
                            <StyledBoxInput>
                                <StyledTextField
                                    id="boardName"
                                    name="boardName"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.boardName}
                                    label="Board Name"
                                    fullWidth
                                    error={(errors.boardName ? true : false) && touched.boardName}
                                    helperText={errors.boardName}
                                />
                            </StyledBoxInput>
                        </Grid>
                        <Grid xs={12}>
                            <StyledBoxInput>
                                <StyledTextField
                                    id="queries"
                                    name="queries"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.queries}
                                    label="Queries"
                                    placeholder='Please separate the query using "," like this: Status/Assigne,IssueType'
                                    multiline
                                    minRows={5}
                                    fullWidth
                                    error={(errors.queries ? true : false) && touched.queries}
                                    helperText={errors.queries}
                                />
                            </StyledBoxInput>
                        </Grid>
                        <Grid xs={12}>
                            <StyledBoxInput>
                                <StyledTextField
                                    id="jiraToken"
                                    name="jiraToken"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.jiraToken}
                                    label="Jira Token"
                                    fullWidth
                                    error={(errors.jiraToken ? true : false) && touched.jiraToken}
                                    helperText={errors.jiraToken}
                                />
                            </StyledBoxInput>
                        </Grid>
                        <Grid xs={12}>
                            <StyledBoxButton>
                                {
                                    props.isLoading ?
                                        <Button
                                            variant='outlined'
                                            startIcon={<Add />}
                                            disabled>
                                            Submit
                                        </Button>
                                        :
                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            startIcon={<Add />}>
                                            Submit
                                        </Button>
                                }
                            </StyledBoxButton>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    )
}

export default JiraSoftwareForm;