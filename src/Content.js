import React from 'react';

export class Content extends React.Component {

    state={
        empData : []
    }
    
        componentDidMount(){
            fetch('http://localhost:8012/api/employee/all' )
            .then(response => response.json())
            .then(data => this.setState({empData: data}))
            console.log("emp.data:" +JSON.stringify(this.state.empData));    
        }

        removeEmp(emp) {
            fetch('http://localhost:8012/api/employee/' + emp.eId, { method: 'delete'})
            // .then(response => response.json()
            // .then(json => { return json; }))
            ;
            var array = [...this.state.empData];
            var index = array.indexOf(emp.eId.value); // Let's say it's Bob.
            array.splice(index,1);
            this.setState({empData: array});
          }
 

        render() {  
        const empList = this.state.empData.map((emp, i) => {
            return (
               
                    <tr>
                   <th>{emp.eId}</th>
                   <th>{emp.eName}</th>
                   <th>{emp.eSalary}</th>
                   <th><button className="btn btn-outline-danger" onClick={()=>this.removeEmp(emp)}><i class="material-icons align-middle">delete</i></button></th>
            </tr>
        
        )});
            
        return (
            <div align="center">
                <h2>Content</h2>
                <table border="strong">
                    <thead>
                        <tr> 
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Salary</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empList}
                    </tbody>
                </table>
            </div>
        );
    }
}