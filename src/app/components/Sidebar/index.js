import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Drawer } from "@material-ui/core";
import closeIcon from "../../asserts/icons/closeIcon.svg";
const drawerWidth = "30%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 99,
  },
  [theme.breakpoints.up("sm")]: {
    width: "70%",
  },

  //   [theme.breakpoints.up("md")]: {
  //     width: "30%",
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     width: "30%",
  //   },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#301E4E",
  },
  button: {
    backgroundColor: "#FF6E6C",
  },
}));

const DrawerComponent = (props) => {
  const classes = useStyles();
  const { isDrawerOpen, setIsDrawerOpen } = props;
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const menuItems = ["Services", "Services", "Blogs", "Contact us "];
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className="text-24 flex flex-col justify-center h-screen ml-[4vw] text-imgtrans font-400">
          <div
            className="absolute top-[6vh] right-[3vw]"
            onClick={handleDrawerToggle}
          >
            <img src={closeIcon} className="hover:scale-75" />
          </div>
          {menuItems.map((item, index) => {
            return (
              <div key={index} className="my-4 hover:text-redText">
                {item}
              </div>
            );
          })}
          <div>
            <button className="bg-redText text-center text-12 p-[1vw] rounded-6 my-20 hover:opacity-25">
              Book an free marketing aduit
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
