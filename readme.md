## Simple Storage - Smart Contract

This simple storage smart contract allows you to store and read a favourite number in the blockchain distributed storage.

There are 2 additional methods in this smart contracts.

### `store(uint256 _favouriteNumber)`

Allows you to update/store the favourite number.

#### Arguments

| Argument          | Type      | Description x                        |
| ----------------- | --------- | ------------------------------------ |
| \_favouriteNumber | `uint256` | New Favourite number to update/store |

### `retrieve()`

It returns/provides the current favourite number.

**Note**: This method won't cost any gas fees, because it's only a view method that restricts it to only read a blockchain state.
