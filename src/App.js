import './App.css';
import React from "react";

class App extends React.Component {

    state = {
        board : [],
        indexes : ""
    }

    createNewBoard = () => {
        const rows = [];
        for (let i = 0; i < 7; i++) {
            const columns = []
            for (let j = 0; j < 6; j++) {
                columns.push({row : j, column : i, player : 0})
            }
            rows.push(columns)
        }
        // const fullIndexes = [7, 7, 7, 7, 7, 7];
        this.setState({
            board : rows,
            // indexes : fullIndexes
        })
        // return rows;
    }

    changePlayer = (event) => {
        const index = event.target
        alert(index)
        // alert(index.row + ", " + index.column )
        // const newBoard = this.state.board;
        // newBoard.at(index.row).at(index.column).player = 1;
        // this.setState({
        //     board : newBoard
        // })
    }

    // changeColor = (event) => {
    //     const id = (event.target.id) % 10;
    //     for (let i = 7 ; i > 0; i--) {
    //         let cellElement  = document.getElementById(id + (i*10));
    //         if (cellElement.classList[cellElement.classList.length-1] == "empty"){
    //             cellElement.classList.add("player1");
    //             break;
    //         }
    //     }
    //
    // }


    render() {
        this.createNewBoard()

        return (
            <div className="App">
                {/*{*/}
                {/*    this.createNewBoard()*/}
                {/*}*/}
                <table>
                    {
                        this.state.board.map((r) => {
                        return (
                                <tr>
                                    {
                                        r.map((c) => {
                                            return (
                                                <td onClick={this.changePlayer}>{c.player}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default App;
