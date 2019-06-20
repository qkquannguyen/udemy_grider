import React from 'react';
import ReactDOM from 'react-dom'
import Faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Lil' Jon" 
                    timeAgo="Today at 4:45PM" 
                    comment="I'm John Cena." 
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Quan" 
                    timeAgo="Today at 2:00AM" 
                    comment="I love to watch anime."
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Maria" 
                    timeAgo="Yesterday at 5:00PM" 
                    comment="I also love to watch anime!" 
                    avatar={Faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))