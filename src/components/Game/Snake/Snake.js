import React from  'react';
import { Box } from '@mui/system';
import { InputBase, Typography } from '@mui/material';

class Snake extends React.Component{
     food_x = 150;
     food_y = 150;
     x = 100;
     y = 100;
     Arr = [];
     key_name = 'none';
     state = { a: 0 };
     score = 2;

     MoveSnake = (e) => {
          this.key_name = e.key;
     }

     food_collied = () => {
          if (this.x >= this.food_x - 10 && this.x <= this.food_x + 10 && this.y >= this.food_y - 10 && this.y <= this.food_y + 10)
               return true;
          else
               return false;
     }
     snake_collide = () => {
          this.Arr.map(e => {
               if(e[0] == this.x && e[1] == this.y) {
                    this.score = 0;
                    this.Arr = [];
               }
          })
     }
     componentWillMount(){
          setInterval(() => {
               if (this.food_collied()){
                    this.food_x = Math.round(Math.random() * 380);
                    this.food_y = Math.round(Math.random() * 380);
                    this.score++;
               }
               if (this.Arr.length > this.score){
                    this.Arr.splice(0, 1);
               }
               this.Arr.push([this.x, this.y])

               switch (this.key_name) {
                    case 'ArrowUp':
                         this.y -= 10;
                         break;
                    case 'ArrowDown':
                         this.y += 10;
                         break;
                    case 'ArrowLeft':
                         this.x -= 10;
                         break;
                    case 'ArrowRight':
                         this.x += 10;
                         break;
                    default: break; 
               }
               if (this.x > 390) { this.x = 0 }
               if (this.x < 0) { this.x = 390 }
               if (this.y > 390) { this.y = 0 }
               if (this.y < 0) { this.y = 390 }

               this.snake_collide();

               this.setState({ a: 0 })

          }, 200);

          
     }
    render(){
          return(
                    <>
                         <Box style={{ display: 'flex', flexDirection: 'column', fontsize: '38px', width: '100%', height:'100%' }}>
                              <Typography style={{fontSize: '40px', fontWeight: '600', textAlign: 'center', margin: '20px'}}><u>Snake Game</u></Typography>
                              <Box style={{marginLeft: '50px' }}>
                              <input style={{width: '0px', height: '0px', backgroundColor: '#80A315', border: '0px solid #80A315'}} onKeyDown = {this.MoveSnake}  ref={(element) => element?.focus?.()}/>
                              <div style={{background: 'linear-gradient(135deg, #9796f0 10%, #FBC7D4 100%)', position: 'relative', width: '400px', height: '400px', border: '8px solid blue', borderRadius: '10px' }}>
                                   <div style={{ position: 'absolute', left: this.x, top: this.y, width: '11px', height: '11px', borderRadius: '10px', border: '2px solid black', background: 'red' }}></div>
                                   {
                                        this.Arr.map((e) =>
                                             <div style={{ position: 'absolute', left: e[0], top: e[1], width: '11px', height: '11px', borderRadius: '10px', border: '2px solid black', background: 'yellow' }}></div> 
                                        )
                                   }
                                   <div style={{ position: 'absolute', left: this.food_x, top: this.food_y, width: '12px', height: '12px', borderRadius: '10px', border: '2px solid black', background: 'green' }}></div>
                              </div>
                              </Box>
                              <Typography style={{ fontSize: '40px', marginLeft: '100px', marginTop: '20px'}}>Score : {this.score}</Typography>
                         </Box>
                    </>
          )
     }
}
export default Snake;