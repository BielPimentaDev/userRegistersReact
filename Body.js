import "./Body.css"

import UserCard from "./UserCard";

const users = {
    '1' : {
        'name': 'Gabriel',
        'job' : 'estagiário',
        'skills' : ['python','Java Script'],
        'about' : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    '2' : {
        'name': 'Guilherme',
        'job' : 'Pleno',
        'skills' : ['python','Java Script'],
        'about' : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    '3' : {
        'name': 'Jhony',
        'job' : 'Junior',
        'skills' : ['python','Java Script'],
        'about' : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
}
function Body() {
    return ( 
        <main>
            <container className="userContainer">       
                {
                    Object.values(users).map((user)=>{
                        return(
                            <UserCard name={user.name} job={user.job} skills={user.skills} about={user.about}/>
                        )
                        
                    })
                }               
                
            </container>
        </main>
        );
}

export default Body;