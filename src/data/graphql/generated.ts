import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type BlogRequestDto = {
  content: Scalars['String']['input'];
  image: Scalars['Upload']['input'];
  title: Scalars['String']['input'];
};

export type BlogRequestUpdateDto = {
  content: Scalars['String']['input'];
  image: Scalars['Upload']['input'];
  title: Scalars['String']['input'];
};

export type BlogResponseDto = {
  __typename?: 'BlogResponseDTO';
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBlog: BlogResponseDto;
  deleteBlog: BlogResponseDto;
  updateBlog: BlogResponseDto;
};


export type MutationCreateBlogArgs = {
  body: BlogRequestDto;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdateBlogArgs = {
  body: BlogRequestUpdateDto;
  id: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getBlogById: BlogResponseDto;
  getBlogs: Array<BlogResponseDto>;
};


export type QueryGetBlogByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetBlogsArgs = {
  page: Scalars['Float']['input'];
};

export type CreateBlogMutationVariables = Exact<{
  body: BlogRequestDto;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog: { __typename?: 'BlogResponseDTO', title: string, content: string, image: string } };

export type DeleteBlogMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', deleteBlog: { __typename?: 'BlogResponseDTO', title: string } };

export type GetBlogByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetBlogByIdQuery = { __typename?: 'Query', getBlogById: { __typename?: 'BlogResponseDTO', title: string, content: string, image: string } };

export type GetBlogsQueryVariables = Exact<{
  page: Scalars['Float']['input'];
}>;


export type GetBlogsQuery = { __typename?: 'Query', getBlogs: Array<{ __typename?: 'BlogResponseDTO', id: string, title: string, content: string, image: string }> };

export type UpdateBlogMutationVariables = Exact<{
  id: Scalars['Float']['input'];
  body: BlogRequestUpdateDto;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'BlogResponseDTO', title: string, content: string, image: string } };


export const CreateBlogDocument = gql`
    mutation createBlog($body: BlogRequestDTO!) {
  createBlog(body: $body) {
    title
    content
    image
  }
}
    `;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      body: // value for 'body'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation deleteBlog($id: Float!) {
  deleteBlog(id: $id) {
    title
  }
}
    `;
export type DeleteBlogMutationFn = Apollo.MutationFunction<DeleteBlogMutation, DeleteBlogMutationVariables>;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogMutation, { data, loading, error }] = useDeleteBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogMutation, DeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
      }
export type DeleteBlogMutationHookResult = ReturnType<typeof useDeleteBlogMutation>;
export type DeleteBlogMutationResult = Apollo.MutationResult<DeleteBlogMutation>;
export type DeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const GetBlogByIdDocument = gql`
    query getBlogById($id: Float!) {
  getBlogById(id: $id) {
    title
    content
    image
  }
}
    `;

/**
 * __useGetBlogByIdQuery__
 *
 * To run a query within a React component, call `useGetBlogByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables> & ({ variables: GetBlogByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
      }
export function useGetBlogByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
        }
export function useGetBlogByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogByIdQuery, GetBlogByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogByIdQuery, GetBlogByIdQueryVariables>(GetBlogByIdDocument, options);
        }
export type GetBlogByIdQueryHookResult = ReturnType<typeof useGetBlogByIdQuery>;
export type GetBlogByIdLazyQueryHookResult = ReturnType<typeof useGetBlogByIdLazyQuery>;
export type GetBlogByIdSuspenseQueryHookResult = ReturnType<typeof useGetBlogByIdSuspenseQuery>;
export type GetBlogByIdQueryResult = Apollo.QueryResult<GetBlogByIdQuery, GetBlogByIdQueryVariables>;
export const GetBlogsDocument = gql`
    query getBlogs($page: Float!) {
  getBlogs(page: $page) {
    id
    title
    content
    image
  }
}
    `;

/**
 * __useGetBlogsQuery__
 *
 * To run a query within a React component, call `useGetBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables> & ({ variables: GetBlogsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
      }
export function useGetBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
        }
export function useGetBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogsQuery, GetBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, options);
        }
export type GetBlogsQueryHookResult = ReturnType<typeof useGetBlogsQuery>;
export type GetBlogsLazyQueryHookResult = ReturnType<typeof useGetBlogsLazyQuery>;
export type GetBlogsSuspenseQueryHookResult = ReturnType<typeof useGetBlogsSuspenseQuery>;
export type GetBlogsQueryResult = Apollo.QueryResult<GetBlogsQuery, GetBlogsQueryVariables>;
export const UpdateBlogDocument = gql`
    mutation updateBlog($id: Float!, $body: BlogRequestUpdateDTO!) {
  updateBlog(id: $id, body: $body) {
    title
    content
    image
  }
}
    `;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      id: // value for 'id'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;