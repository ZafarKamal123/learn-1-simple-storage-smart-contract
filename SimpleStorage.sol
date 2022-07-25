// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleStorage {

    // Note: We dont need to explicitly allocate this variable as storage, 
    // because it will be a allocated as storage by default in this scope. 
    mapping(string => uint256) public persons;

    // Allows adding a new person to the storage.
    function addPerson(string memory _name, uint256 _age) public {
        persons[_name] = _age;
    }

    // Obtaining an specific person age from the storage.
    // Note: This method won't cost any gas fees, as it's only a view method.
    function getPersonAge(string memory _name) public view returns (uint256) {
        return persons[_name];
    }
    
}