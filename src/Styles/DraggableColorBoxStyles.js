import sizes from "./sizes";
import chroma from "chroma-js";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "9 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            heigh: "20%",
        },
        [sizes.down("md")]: {
            width: "50%",
            heigh: "10%",
        },
        [sizes.down("sm")]: {
            width: "100%",
            heigh: "5%",
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: props =>
            chroma(props.color).luminance() <= 0.08 ? "white" : "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.2s ease-in-out",
        marginRight: "10px"
    }
};

export default styles;