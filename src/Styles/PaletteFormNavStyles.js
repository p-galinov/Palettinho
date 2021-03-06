import sizes from "./sizes";

const drawerWidth = 240;

const styles = theme => ({
    root:{
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        height: "64px",
        alignItems: "center",
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      hide: {
        display: 'none',
      },
      menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      navBtns: {
        marginRight: "1rem",
        [sizes.down("xs")]:{
          marginRight: "0",
        }
      },
      button:{
        margin: "0 0.5rem",
        [sizes.down("xs")]:{
          margin: "0.5rem",
        }
      },
      link:{
        textDecoration: "none",
      }
});

export default styles;