import { Client, Account, ID, Avatars, Databases, Query} from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.zaba',
    projectId: '6650f0cd00357c6fd781',
    databaseId: '6650f21d00193e0f814a',
    userCollectionId: '6650f234002ec5ec145e',
    videoCollectionId: '6650f25b00298e5f85ec',
    storageId: '6650fd0e0014f3459bcd'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) 
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);


export async function createUser(email, password, username) {
    try {

        const newAccount = await account.create(
            ID.unique(),
            email,
            password, 
            username
        );

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);
        
        await signIn(email, password)
        
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email: email,
                username: username,
                avatar: avatarUrl
            }
        )

        return newUser
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }


}


export async function signIn(email, password) {
    try {
        account.deleteSession('current')
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        throw new Error(error);
    }

}



export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        
        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch(error) {
        console.log(error)
    }
}


export const getAllPosts = async () => {

    try {

        const posts = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.videoCollectionId
        )

        return posts.documents;

    } catch (error){
        throw new Error(error)

    }
}