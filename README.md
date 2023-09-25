# LegitCred-BlockChain-based-Certification-System ⛓️ | Submission for HackVGEC 2023
### "Certify with Confidence!"

* Features
* Approaches 
* Our Solution - LegitCred 🚀
* Technologies we used 👩🏻‍💻
* Project Timeline ⏰
* Future Plans for Project 📝
* Glimpse of Project LegitCred ✨

# Features:
1. Use of blockchain to create immutable and tamper-proof records
2. NFT is created for every certificate and the metadata associated with it contains the data of participant
3. The organization's wallet address is used to store all NFTs belonging to that organization.
4. Participants can claim ownership of their NFTs by connecting their wallets to the NFT marketplace and if they don't have wallets set up they can simply look from nft marketplace of organization
5. Certificates can simply be verified having the given URL
5. Easy access to verified certificates for organizations and their participants
6. Editable template given on the web-app where the user can drag and drop elements and change the values and update certificate template according to their use
7. To integrate LegitCred with existing traditional systems, API endpoints are provided


# Our Approaches during hack hours and associated loopholes:
## 1. First Approach without NFT 
* Certificate converted to blob (Binary Large Object)
* Using SHA-256, converting the blob to hash
* Storing the hash on BlockChain
* Using MongoDB stored and mapped Hash with the respective blob of the certificate.
* Smart Contract Code: [Link](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/src/SmartContract/Certificate1.sol)

### Loopholes in this approach and suggestions by jury in evaluation round 1:
* the approach of using blob and converting it into hash and using the hash to identify the certify is almost similar to web2
* jury suggested to use the concept of NFT

## 2. Second Approach With UUID (Universally Unique Identifier):
* Every certficate was given a unique id called UUID
* this UUID was generated by a combination of name, organization, event, timestamp and UUID.random()
* we add this UUID into the certificate itself so that someone can simply use UUID for easy verification
* This certificate is uploaded on IPFS (InterPlanetary File System) which gives a CID or a IPFS hash for the certificate
* Metadata is uploaded on Pinata and a tokenURI is generated 
* Smart Contract to form NFT with TokenURI, Recipent address, tokenID
* mapping tokenID with UUID
* For verfication the user need to enter UUID and the required details
* From UUID we get tokenID, from tokenID we get metadata, then we get metadata and compare it with the details entered by user
* Smart Contract Code: [Link](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/src/SmartContract/certificate_with_uuid.sol)

### Loopholes in this approach and suggestions by jury in evaluation round 2:
* No need of UUID, it can be fetched from tokenID and the link from NFT Marketplace 
* form NFT Marketplace and every organization will have the certificates of participants stored on their wallet address 

## 3. Approach without UUID
* Implemented the suggestions in approach 2
* Smart Contraact Code: [Link](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/src/SmartContract/Certificate1.sol)


# Technologies we used 👩🏻‍💻
* BlockChain:
  * NFTs
  * ERC721URIStorage
  * ERC721
  * Solidity
  * ether.js
  * metamask
* Frontend:
  * ReactJS
* Backend:
  * Node.js
  * Express.js
* APIs Used
  * Pinata Web3 Platform
  * IPFS Decentrailized storage  


# Glimpse of Project:
![alt text](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/images/image4.png)
![alt text](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/images/image3.png)
![alt text](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/images/image2.png)
![alt text](https://github.com/Drishty06/LegitCred-BlockChain-based-Certification-System/blob/main/images/image1.png)
