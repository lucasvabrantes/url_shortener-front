import { Box, Container, Link, TextField, Typography } from "@mui/material";
import "./style.scss";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";

export const Home = () => {
    return (
        <Container
            sx={{
                flexDirection: "column",
                margin: "0 auto",
                maxWidth: "100vw",
                padding: 0,
            }}
        >
            <header className="header">
                <Typography sx={{ fontSize: "32px" }} variant="h1">
                    URL_SHORTENER
                </Typography>
                <div className="navContainer">
                    <nav>
                        <Link>About</Link>
                    </nav>
                </div>
            </header>
            <Box
                sx={{
                    width: "100%",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                component="main"
            >
                <Box
                    component="section"
                    sx={{
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    <figure className="schema">
                        <img src="./schema.png" alt="" />
                    </figure>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                    }}
                    component="section"
                >
                    <form className="urlForm">
                        <TextField
                            id="outlined-basic"
                            label="Digite aqui sua URL"
                            variant="outlined"
                            className="urlField"
                        />
                        <LoadingButton
                            loadingPosition="start"
                            loading={false}
                            variant="contained"
                            startIcon={<SendIcon />}
                            type="submit"
                        >
                            Shorten URL
                        </LoadingButton>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};
