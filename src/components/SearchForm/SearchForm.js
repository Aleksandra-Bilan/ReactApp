import React from "react";
import SearchField from "../SearchField/SearchField";
import TypeButtonsList from "../TypeButtonsList/TypeButtonsList";
import LimitButtonsList from "../LimitButtonsList/LimitButtonsList";
import SearchButton from "../SearchButton/SearchButton";

export default class SearchForm extends React.Component {
    render() {
        return (
            <form action="">
                <SearchField />
                <TypeButtonsList />
                <LimitButtonsList />
                <SearchButton />
            </form>
        )
    }
}
