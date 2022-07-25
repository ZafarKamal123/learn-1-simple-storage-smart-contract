## Simple Storage - Smart Contract

This simple storage smart contract allows you to store and read persons along with thier age as an additional metadata. 

There are 2 additional methods in this smart contracts.

### ``addPerson(string memory _name, uint256 _age)``

Allows you to add a new person to the storage.

#### Arguments

| Argument | Type | Description | 
|--|--|--|
| _name | ``uint256`` | Name of the person to be added |
| _age | ``uint256`` | Age of the person to be added|

### ``getPerson(string memory _name)``

Allows you to read an specific person age.

**Note**: This method won't cost any gas fees, because it's only a view method that restricts it to only read a blockchain state.

#### Arguments

| Argument | Type | Description | 
|--|--|--|
| _name | ``uint256`` | Name of the person whose age you want to read | 

#### Returns

It returns/provides the age of the person you specified from the argument "name", If the person is not found. It will provide "0", because the "uint256" type defaults to 0 in solidity.