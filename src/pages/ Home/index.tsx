import { Box, Container, Link, TextField, Typography } from "@mui/material";
import "./style.scss";

export const Home = () => {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                maxWidth: "100vw",
                padding: 0,
            }}
        >
            <header className="header">
                <Typography sx={{ fontSize: "36px" }} variant="h1">
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
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                }}
                component="main"
            >
                <Box
                    component="section"
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    <figure className="schema">
                        <img src="./schema.png" alt="" />
                    </figure>
                </Box>
                <Box component="section">
                    <TextField
                        id="outlined-basic"
                        label="Digite aqui sua URL"
                        variant="outlined"
                    />
                </Box>
            </Box>
        </Container>
    );
};
