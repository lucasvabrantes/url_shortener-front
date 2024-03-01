import { Link, Typography } from "@mui/material";
import "./style.scss";

export const Header = () => {
    return (
        <header className="header">
            <Typography
                sx={{
                    fontSize: "2rem",
                    fontFamily: "IBM Plex Sans, sans-serif",
                    color: "#086788",
                    fontWeight: "700",
                }}
                variant="h1"
            >
                URL Shortener
            </Typography>
            <div className="navContainer">
                <nav>
                    <Link
                        sx={{
                            cursor: "pointer",
                            color: "#086788",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                        className="about"
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
};
