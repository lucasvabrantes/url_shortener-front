import { Box, Container, TextField } from "@mui/material";
import "./style.scss";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import { Header } from "../../components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormSchema, formSchema } from "./formSchema";
import { useState } from "react";
import { sendUrl } from "../../providers/sendUrl";

type Url = {
    url: string;
};

export const Home = () => {
    const [newUrl, setNewUrl] = useState("");
    console.log(newUrl);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

    const onSubmit: SubmitHandler<TFormSchema> = async (formData: Url) => {
        console.log(formData);
        const newUrlGenerated = await sendUrl(formData);
        setNewUrl(newUrlGenerated);
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="urlForm">
                        <TextField
                            {...register("url")}
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
                    {newUrl ? newUrl : null}
                </Box>
            </Container>
        </>
    );
};
