import React from "react";

const ContactList = (props) =>{

    //validating if data is passing via props
    console.log(props);

    //function to retrieve and map data passed from prop
    const renderContactList = props.contacts.map((contact) =>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        )
    })

    return(
        //calling the above function to be rendered on page
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;