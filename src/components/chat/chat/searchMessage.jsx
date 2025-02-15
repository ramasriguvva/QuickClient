import { Box, InputBase, styled} from "@mui/material"; 
import { Search as SearchIcon } from "@mui/icons-material";

const Component = styled(Box)`
    height: 45px;
    border-bottom: 1px solid #f2F2F2;
    display: inline;
    align-items: center;
`

const Wrapper = styled(Box)`
    background-color: #DCD0FF;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
`

const InputField = styled(InputBase)`
    width: 350px;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 14px;
`

const SearchMessage = ({ setText }) =>{
    return(
        <div  style={{position: 'fixed', display: 'inline', right: '22%', top: '4%'}}>
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon  fontSize="small"/>
                </Icon>
                <InputField placeholder="Search meassages quickly" 
                    onChange={(e) => setText(e.target.value)}
                />             
            </Wrapper>
        </Component>
        </div>
    )
}

export default SearchMessage;