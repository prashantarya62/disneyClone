import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useNavigate();
  useEffect(() => {
    if (value === 0) {
        history("/");
      } else if (value === 1) {
        history("/Popular");
      } else if (value === 2) {
        history("/Latest");
      } else if (value === 3) {
        history("/Upcoming");
      }

    
     
  }, [value, history])
  return (
        <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Top Rated"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Popular"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Latest"
        icon={<TvIcon />}
      />

   <BottomNavigationAction
  style={{ color: "white" }}
  label="UpComing"
  icon={<ArrowUpwardIcon/>}
   />

    </BottomNavigation>
  );
}
