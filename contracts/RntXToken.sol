pragma solidity ^0.4.11;


import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/PausableToken.sol";

/**
 * @title RntX Token
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
contract RntXToken is PausableToken, BurnableToken {

  string public constant name = "RntX"; // solium-disable-line uppercase
  string public constant symbol = "RNTX"; // solium-disable-line uppercase
  uint8 public constant decimals = 18; // solium-disable-line uppercase

  uint256 public constant INITIAL_SUPPLY = 10000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function RntXToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    Transfer(0x0, msg.sender, INITIAL_SUPPLY);
  }

}