import app from './app.mjs'

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});