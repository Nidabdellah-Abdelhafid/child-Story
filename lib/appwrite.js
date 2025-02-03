import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';


export const config={
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jsm.movies-app",
    projectId: "679e44800008ae13c463",
    databaseId: "679e518a0011843750bb",
    userCollectionId: "679e51e90028412c4e02",
    videoCollectionId: "679e5229000ee5eac55b",
    storageId: "679e552700032d3ae008",
}

const client = new Client();
    client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email,password,username)=>{
    account.create(ID.unique(),'hafid2@gmail.com','password','hafid')
    .then((res)=>{
        console.log(res);

    },(err)=>{
        console.log(err);
    }
) 
    try{
        const newAccount = account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw new Error;
        const avatarUrl = avatars.getInitials(username);

        await singIn(email,password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
            accountId:(await newAccount).$id,
            email,
            password,
            avatar: avatarUrl
        })

        return newUser;
    }catch(err){
        console.log(err);
        throw new Error;
    }
}

export async function singIn(email,password) {
    try{
        const session = await account.createEmailPasswordSession(email,password);
        return session;
    }catch(err){
        console.log(err);
        throw new Error;
    }
    
}
