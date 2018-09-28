import React from 'react';
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";

const styles = () => ({
    card: {
        margin: 10,
        maxWidth: 250,
        minWidth: 250
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    }
});

const BigCard = (props) => {
    const { title, content, classes } = props;

    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    {title}
                </Typography>
                <Typography variant="headline" component="h2">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default withStyles(styles)(BigCard);
