import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class ListBoardComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            boards: []
        }
        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
        console.log(res.data);
        
        this.setState({ boards: res.data});
        });
    }

    createBoard() {
        this.props.history.push('/create-board/');
    }

	readBoard(no) {
        this.props.history.push(`/read-board/${no}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">게시글 목록</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.createBoard}> 새 글쓰기 </button>

                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>타이틀</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>갱신일</th>
                                <th>좋아요</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board =>
                                    <tr key={board.no}>
                                        <td>{board.no}</td>
                                        <td><a onClick={()=>this.readBoard(board.no)}>{board.title}</a></td>
                                        <td>{board.memberNo}</td>
                                        <td>{board.createdTime}</td>
                                        <td>{board.updatedTime}</td>
                                        <td>{board.likes}</td>
                                        <td>{board.count}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;