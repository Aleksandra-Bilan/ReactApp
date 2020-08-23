import React from "react";
import SearchField from "../SearchField/SearchField";


export default class TypeButtonsList extends React.Component {
    render() {
        return (
            <div>
                <SearchField value={'album'} type={'checkbox'}/>
                <SearchField value={'artist'} type={'checkbox'}/>
                <SearchField value={'playlist'} type={'checkbox'}/>
                <SearchField value={'track'} type={'checkbox'}/>
            </div>
        );
    }
}
