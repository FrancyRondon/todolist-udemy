import {Header, Icon, Grid, Button, Segment, Label  } from "semantic-ui-react";

export default function Task(props) {

    const { task, deleteTask } = props;
    const { idTask, taskName, categoryTask} = task;

    return (
        <Grid.Column width={8} className="task-container">
            <Segment>
                {categoryTask && (
                    <Label color="teal" ribbon="right">
                        {categoryTask}
                    </Label>
                )}
                <Header as="h3" className="header-task">
                    {taskName}
                </Header>
                <Header as="h5">{idTask}</Header>
                <Grid centered columns={2}>
                    <Grid.Column>
                    {/* sino se coloca los parentesis mas el signo => el onclick no se ejecutar */}
                        <Button color="red" onClick={() => deleteTask(idTask)}> 
                        <Icon name="remove circle"  /> Eliminar
                        </Button>
                        
                    </Grid.Column>
                </Grid>
            </Segment>
        </Grid.Column>
    );
};
