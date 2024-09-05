import NextAuth from'next-auth' ;
import GoogleProvider from 'next-auth/providers/google';

export const handler = NextAuth({
    providers: [
        GoogleProvider (
            {
                clientId:'',
                clientSecret:''
                
            }       
        )
    ],
    async session( {session}){

    },
    async signIn(profile){
        
    }

})