import { Box, Container, TextField } from "@mui/material";
import "./style.scss";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { Header } from "../../components/Header";

export const Home = () => {
    return (
        <>
            <Header />
            <Container
                maxWidth={false}
                sx={{
                    flexDirection: "column",
                    margin: "0 auto",
                    maxWidth: "100%",
                    height: "100vh",
                    bgcolor: "#FBFEF9",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignContent: "center",
                        alignItems: "center",
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
                            <img
                                src="./schema.png"
                                alt="Imagem mostra flecha grande se dividindo em pedaços menores, depois reconstituindo-se em uma flecha menor.A flecha grande representa a a URL que você quer encurtar, e a flecha menor representa a sua URL encurtada.As flechas apontam para direita."
                            />
                        </figure>
                    </Box>
                    <form className="urlForm">
                        <TextField
                            id="outlined-basic"
                            label="Cole aqui sua URL"
                            variant="outlined"
                            className="urlField"
                            color="secondary"
                            sx={{
                                color: "#222725",
                            }}
                        />
                        <LoadingButton
                            loadingPosition="start"
                            loading={false}
                            variant="contained"
                            startIcon={<SendIcon />}
                            type="submit"
                            className="sendButton"
                        >
                            Shorten URL
                        </LoadingButton>
                    </form>
                </Box>
            </Container>
        </>
    );
};
