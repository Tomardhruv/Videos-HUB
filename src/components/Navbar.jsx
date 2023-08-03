import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from '../utils/constants';
import { SearchBar } from "./";



const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>

    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      {/* ADD SITE NAME HERE */}
      <Typography  variant='h4' fontWeight='bold' sx={{ mt: 1.0, ml:1.5, color: '#fff' }}>
         VIDEOS HUB
      </Typography>
      
    </Link>

    <SearchBar />

  </Stack>



);

export default Navbar