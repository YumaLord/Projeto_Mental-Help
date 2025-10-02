
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Consulta: 'Consulta',
    Chat: 'Chat',
    Mensagem: 'Mensagem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "consulta" | "chat" | "mensagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    consulta?: ConsultaOmit
    chat?: ChatOmit
    mensagem?: MensagemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    consulta: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | UsuarioCountOutputTypeCountConsultaArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountConsultaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Count Type ConsultaCountOutputType
   */

  export type ConsultaCountOutputType = {
    usuario: number
  }

  export type ConsultaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | ConsultaCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultaCountOutputType
     */
    select?: ConsultaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    mensagens: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagens?: boolean | ChatCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    idade: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    avatar: string | null
    idade: number | null
    email: string | null
    senha: string | null
    apelido: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    avatar: string | null
    idade: number | null
    email: string | null
    senha: string | null
    apelido: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    avatar: number
    idade: number
    email: number
    senha: number
    apelido: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    idade?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    idade?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    avatar?: true
    idade?: true
    email?: true
    senha?: true
    apelido?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    avatar?: true
    idade?: true
    email?: true
    senha?: true
    apelido?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    avatar?: true
    idade?: true
    email?: true
    senha?: true
    apelido?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    avatar: string
    idade: number
    email: string
    senha: string
    apelido: string | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    avatar?: boolean
    idade?: boolean
    email?: boolean
    senha?: boolean
    apelido?: boolean
    consulta?: boolean | Usuario$consultaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    avatar?: boolean
    idade?: boolean
    email?: boolean
    senha?: boolean
    apelido?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    avatar?: boolean
    idade?: boolean
    email?: boolean
    senha?: boolean
    apelido?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    avatar?: boolean
    idade?: boolean
    email?: boolean
    senha?: boolean
    apelido?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "avatar" | "idade" | "email" | "senha" | "apelido", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | Usuario$consultaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      avatar: string
      idade: number
      email: string
      senha: string
      apelido: string | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consulta<T extends Usuario$consultaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$consultaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly avatar: FieldRef<"Usuario", 'String'>
    readonly idade: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly apelido: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.consulta
   */
  export type Usuario$consultaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    horario: Date | null
    data: Date | null
    flag: string | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    horario: Date | null
    data: Date | null
    flag: string | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    horario: number
    data: number
    flag: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    horario?: true
    data?: true
    flag?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    horario?: true
    data?: true
    flag?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    horario?: true
    data?: true
    flag?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    horario: Date
    data: Date
    flag: string | null
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    data?: boolean
    flag?: boolean
    chat?: boolean | Consulta$chatArgs<ExtArgs>
    usuario?: boolean | Consulta$usuarioArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    data?: boolean
    flag?: boolean
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    data?: boolean
    flag?: boolean
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    horario?: boolean
    data?: boolean
    flag?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horario" | "data" | "flag", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | Consulta$chatArgs<ExtArgs>
    usuario?: boolean | Consulta$usuarioArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      horario: Date
      data: Date
      flag: string | null
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultaCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultaUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends Consulta$chatArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$chatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends Consulta$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly horario: FieldRef<"Consulta", 'DateTime'>
    readonly data: FieldRef<"Consulta", 'DateTime'>
    readonly flag: FieldRef<"Consulta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
  }

  /**
   * Consulta createManyAndReturn
   */
  export type ConsultaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta updateManyAndReturn
   */
  export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta.chat
   */
  export type Consulta$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
  }

  /**
   * Consulta.usuario
   */
  export type Consulta$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    id: number | null
    consulta_id: number | null
  }

  export type ChatSumAggregateOutputType = {
    id: number | null
    consulta_id: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: number | null
    data_do_chat: Date | null
    hora_do_chat: Date | null
    consulta_id: number | null
  }

  export type ChatMaxAggregateOutputType = {
    id: number | null
    data_do_chat: Date | null
    hora_do_chat: Date | null
    consulta_id: number | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    data_do_chat: number
    hora_do_chat: number
    consulta_id: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    id?: true
    consulta_id?: true
  }

  export type ChatSumAggregateInputType = {
    id?: true
    consulta_id?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    data_do_chat?: true
    hora_do_chat?: true
    consulta_id?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    data_do_chat?: true
    hora_do_chat?: true
    consulta_id?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    data_do_chat?: true
    hora_do_chat?: true
    consulta_id?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: number
    data_do_chat: Date
    hora_do_chat: Date
    consulta_id: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_do_chat?: boolean
    hora_do_chat?: boolean
    consulta_id?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
    mensagens?: boolean | Chat$mensagensArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_do_chat?: boolean
    hora_do_chat?: boolean
    consulta_id?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data_do_chat?: boolean
    hora_do_chat?: boolean
    consulta_id?: boolean
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    data_do_chat?: boolean
    hora_do_chat?: boolean
    consulta_id?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data_do_chat" | "hora_do_chat" | "consulta_id", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
    mensagens?: boolean | Chat$mensagensArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consulta?: boolean | ConsultaDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      consulta: Prisma.$ConsultaPayload<ExtArgs>
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data_do_chat: Date
      hora_do_chat: Date
      consulta_id: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consulta<T extends ConsultaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConsultaDefaultArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensagens<T extends Chat$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Chat$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'Int'>
    readonly data_do_chat: FieldRef<"Chat", 'DateTime'>
    readonly hora_do_chat: FieldRef<"Chat", 'DateTime'>
    readonly consulta_id: FieldRef<"Chat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.mensagens
   */
  export type Chat$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
  }

  export type MensagemSumAggregateOutputType = {
    id: number | null
    chat_id: number | null
  }

  export type MensagemMinAggregateOutputType = {
    id: number | null
    caracteres: string | null
    data_envio: Date | null
    chat_id: number | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: number | null
    caracteres: string | null
    data_envio: Date | null
    chat_id: number | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    caracteres: number
    data_envio: number
    chat_id: number
    _all: number
  }


  export type MensagemAvgAggregateInputType = {
    id?: true
    chat_id?: true
  }

  export type MensagemSumAggregateInputType = {
    id?: true
    chat_id?: true
  }

  export type MensagemMinAggregateInputType = {
    id?: true
    caracteres?: true
    data_envio?: true
    chat_id?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    caracteres?: true
    data_envio?: true
    chat_id?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    caracteres?: true
    data_envio?: true
    chat_id?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _avg?: MensagemAvgAggregateInputType
    _sum?: MensagemSumAggregateInputType
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: number
    caracteres: string
    data_envio: Date
    chat_id: number
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caracteres?: boolean
    data_envio?: boolean
    chat_id?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caracteres?: boolean
    data_envio?: boolean
    chat_id?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    caracteres?: boolean
    data_envio?: boolean
    chat_id?: boolean
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id?: boolean
    caracteres?: boolean
    data_envio?: boolean
    chat_id?: boolean
  }

  export type MensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "caracteres" | "data_envio" | "chat_id", ExtArgs["result"]["mensagem"]>
  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      caracteres: string
      data_envio: Date
      chat_id: number
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems and returns the data updated in the database.
     * @param {MensagemUpdateManyAndReturnArgs} args - Arguments to update many Mensagems.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MensagemUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mensagem model
   */
  interface MensagemFieldRefs {
    readonly id: FieldRef<"Mensagem", 'Int'>
    readonly caracteres: FieldRef<"Mensagem", 'String'>
    readonly data_envio: FieldRef<"Mensagem", 'DateTime'>
    readonly chat_id: FieldRef<"Mensagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
  }

  /**
   * Mensagem updateManyAndReturn
   */
  export type MensagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to delete.
     */
    limit?: number
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    avatar: 'avatar',
    idade: 'idade',
    email: 'email',
    senha: 'senha',
    apelido: 'apelido'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    horario: 'horario',
    data: 'data',
    flag: 'flag'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    data_do_chat: 'data_do_chat',
    hora_do_chat: 'hora_do_chat',
    consulta_id: 'consulta_id'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    caracteres: 'caracteres',
    data_envio: 'data_envio',
    chat_id: 'chat_id'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    avatar?: StringFilter<"Usuario"> | string
    idade?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    apelido?: StringNullableFilter<"Usuario"> | string | null
    consulta?: ConsultaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    avatar?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    apelido?: SortOrderInput | SortOrder
    consulta?: ConsultaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    avatar?: StringFilter<"Usuario"> | string
    idade?: IntFilter<"Usuario"> | number
    senha?: StringFilter<"Usuario"> | string
    apelido?: StringNullableFilter<"Usuario"> | string | null
    consulta?: ConsultaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    avatar?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    apelido?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    avatar?: StringWithAggregatesFilter<"Usuario"> | string
    idade?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    apelido?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    horario?: DateTimeFilter<"Consulta"> | Date | string
    data?: DateTimeFilter<"Consulta"> | Date | string
    flag?: StringNullableFilter<"Consulta"> | string | null
    chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    usuario?: UsuarioListRelationFilter
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    horario?: SortOrder
    data?: SortOrder
    flag?: SortOrderInput | SortOrder
    chat?: ChatOrderByWithRelationInput
    usuario?: UsuarioOrderByRelationAggregateInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    horario?: DateTimeFilter<"Consulta"> | Date | string
    data?: DateTimeFilter<"Consulta"> | Date | string
    flag?: StringNullableFilter<"Consulta"> | string | null
    chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    usuario?: UsuarioListRelationFilter
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    horario?: SortOrder
    data?: SortOrder
    flag?: SortOrderInput | SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    horario?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    data?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    flag?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: IntFilter<"Chat"> | number
    data_do_chat?: DateTimeFilter<"Chat"> | Date | string
    hora_do_chat?: DateTimeFilter<"Chat"> | Date | string
    consulta_id?: IntFilter<"Chat"> | number
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
    mensagens?: MensagemListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    data_do_chat?: SortOrder
    hora_do_chat?: SortOrder
    consulta_id?: SortOrder
    consulta?: ConsultaOrderByWithRelationInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    consulta_id?: number
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    data_do_chat?: DateTimeFilter<"Chat"> | Date | string
    hora_do_chat?: DateTimeFilter<"Chat"> | Date | string
    consulta?: XOR<ConsultaScalarRelationFilter, ConsultaWhereInput>
    mensagens?: MensagemListRelationFilter
  }, "id" | "consulta_id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    data_do_chat?: SortOrder
    hora_do_chat?: SortOrder
    consulta_id?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chat"> | number
    data_do_chat?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    hora_do_chat?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    consulta_id?: IntWithAggregatesFilter<"Chat"> | number
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    caracteres?: StringFilter<"Mensagem"> | string
    data_envio?: DateTimeFilter<"Mensagem"> | Date | string
    chat_id?: IntFilter<"Mensagem"> | number
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MensagemOrderByWithRelationInput = {
    id?: SortOrder
    caracteres?: SortOrder
    data_envio?: SortOrder
    chat_id?: SortOrder
    chat?: ChatOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    caracteres?: StringFilter<"Mensagem"> | string
    data_envio?: DateTimeFilter<"Mensagem"> | Date | string
    chat_id?: IntFilter<"Mensagem"> | number
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MensagemOrderByWithAggregationInput = {
    id?: SortOrder
    caracteres?: SortOrder
    data_envio?: SortOrder
    chat_id?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _avg?: MensagemAvgOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
    _sum?: MensagemSumOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensagem"> | number
    caracteres?: StringWithAggregatesFilter<"Mensagem"> | string
    data_envio?: DateTimeWithAggregatesFilter<"Mensagem"> | Date | string
    chat_id?: IntWithAggregatesFilter<"Mensagem"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    avatar: string
    idade: number
    email: string
    senha: string
    apelido?: string | null
    consulta?: ConsultaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    avatar: string
    idade: number
    email: string
    senha: string
    apelido?: string | null
    consulta?: ConsultaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
    consulta?: ConsultaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
    consulta?: ConsultaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    avatar: string
    idade: number
    email: string
    senha: string
    apelido?: string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultaCreateInput = {
    horario: Date | string
    data: Date | string
    flag?: string | null
    chat?: ChatCreateNestedOneWithoutConsultaInput
    usuario?: UsuarioCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    horario: Date | string
    data: Date | string
    flag?: string | null
    chat?: ChatUncheckedCreateNestedOneWithoutConsultaInput
    usuario?: UsuarioUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUpdateInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutConsultaNestedInput
    usuario?: UsuarioUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUncheckedUpdateOneWithoutConsultaNestedInput
    usuario?: UsuarioUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaCreateManyInput = {
    id?: number
    horario: Date | string
    data: Date | string
    flag?: string | null
  }

  export type ConsultaUpdateManyMutationInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatCreateInput = {
    data_do_chat: Date | string
    hora_do_chat: Date | string
    consulta: ConsultaCreateNestedOneWithoutChatInput
    mensagens?: MensagemCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: number
    data_do_chat: Date | string
    hora_do_chat: Date | string
    consulta_id: number
    mensagens?: MensagemUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutChatNestedInput
    mensagens?: MensagemUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta_id?: IntFieldUpdateOperationsInput | number
    mensagens?: MensagemUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: number
    data_do_chat: Date | string
    hora_do_chat: Date | string
    consulta_id: number
  }

  export type ChatUpdateManyMutationInput = {
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta_id?: IntFieldUpdateOperationsInput | number
  }

  export type MensagemCreateInput = {
    caracteres: string
    data_envio: Date | string
    chat: ChatCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateInput = {
    id?: number
    caracteres: string
    data_envio: Date | string
    chat_id: number
  }

  export type MensagemUpdateInput = {
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: IntFieldUpdateOperationsInput | number
  }

  export type MensagemCreateManyInput = {
    id?: number
    caracteres: string
    data_envio: Date | string
    chat_id: number
  }

  export type MensagemUpdateManyMutationInput = {
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    avatar?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    apelido?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    avatar?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    apelido?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    avatar?: SortOrder
    idade?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    apelido?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChatNullableScalarRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    data?: SortOrder
    flag?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    data?: SortOrder
    flag?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    data?: SortOrder
    flag?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConsultaScalarRelationFilter = {
    is?: ConsultaWhereInput
    isNot?: ConsultaWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    data_do_chat?: SortOrder
    hora_do_chat?: SortOrder
    consulta_id?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    data_do_chat?: SortOrder
    hora_do_chat?: SortOrder
    consulta_id?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    data_do_chat?: SortOrder
    hora_do_chat?: SortOrder
    consulta_id?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    id?: SortOrder
    consulta_id?: SortOrder
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MensagemCountOrderByAggregateInput = {
    id?: SortOrder
    caracteres?: SortOrder
    data_envio?: SortOrder
    chat_id?: SortOrder
  }

  export type MensagemAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    caracteres?: SortOrder
    data_envio?: SortOrder
    chat_id?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id?: SortOrder
    caracteres?: SortOrder
    data_envio?: SortOrder
    chat_id?: SortOrder
  }

  export type MensagemSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
  }

  export type ConsultaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput> | ConsultaCreateWithoutUsuarioInput[] | ConsultaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutUsuarioInput | ConsultaCreateOrConnectWithoutUsuarioInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput> | ConsultaCreateWithoutUsuarioInput[] | ConsultaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutUsuarioInput | ConsultaCreateOrConnectWithoutUsuarioInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConsultaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput> | ConsultaCreateWithoutUsuarioInput[] | ConsultaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutUsuarioInput | ConsultaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutUsuarioInput | ConsultaUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutUsuarioInput | ConsultaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutUsuarioInput | ConsultaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput> | ConsultaCreateWithoutUsuarioInput[] | ConsultaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutUsuarioInput | ConsultaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutUsuarioInput | ConsultaUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutUsuarioInput | ConsultaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutUsuarioInput | ConsultaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutConsultaInput = {
    create?: XOR<ChatCreateWithoutConsultaInput, ChatUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ChatCreateOrConnectWithoutConsultaInput
    connect?: ChatWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutConsultaInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedOneWithoutConsultaInput = {
    create?: XOR<ChatCreateWithoutConsultaInput, ChatUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ChatCreateOrConnectWithoutConsultaInput
    connect?: ChatWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<ChatCreateWithoutConsultaInput, ChatUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ChatCreateOrConnectWithoutConsultaInput
    upsert?: ChatUpsertWithoutConsultaInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutConsultaInput, ChatUpdateWithoutConsultaInput>, ChatUncheckedUpdateWithoutConsultaInput>
  }

  export type UsuarioUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutConsultaInput | UsuarioUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutConsultaInput | UsuarioUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutConsultaInput | UsuarioUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ChatUncheckedUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<ChatCreateWithoutConsultaInput, ChatUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: ChatCreateOrConnectWithoutConsultaInput
    upsert?: ChatUpsertWithoutConsultaInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutConsultaInput, ChatUpdateWithoutConsultaInput>, ChatUncheckedUpdateWithoutConsultaInput>
  }

  export type UsuarioUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutConsultaInput | UsuarioUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutConsultaInput | UsuarioUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutConsultaInput | UsuarioUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type ConsultaCreateNestedOneWithoutChatInput = {
    create?: XOR<ConsultaCreateWithoutChatInput, ConsultaUncheckedCreateWithoutChatInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutChatInput
    connect?: ConsultaWhereUniqueInput
  }

  export type MensagemCreateNestedManyWithoutChatInput = {
    create?: XOR<MensagemCreateWithoutChatInput, MensagemUncheckedCreateWithoutChatInput> | MensagemCreateWithoutChatInput[] | MensagemUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutChatInput | MensagemCreateOrConnectWithoutChatInput[]
    createMany?: MensagemCreateManyChatInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MensagemCreateWithoutChatInput, MensagemUncheckedCreateWithoutChatInput> | MensagemCreateWithoutChatInput[] | MensagemUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutChatInput | MensagemCreateOrConnectWithoutChatInput[]
    createMany?: MensagemCreateManyChatInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type ConsultaUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<ConsultaCreateWithoutChatInput, ConsultaUncheckedCreateWithoutChatInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutChatInput
    upsert?: ConsultaUpsertWithoutChatInput
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutChatInput, ConsultaUpdateWithoutChatInput>, ConsultaUncheckedUpdateWithoutChatInput>
  }

  export type MensagemUpdateManyWithoutChatNestedInput = {
    create?: XOR<MensagemCreateWithoutChatInput, MensagemUncheckedCreateWithoutChatInput> | MensagemCreateWithoutChatInput[] | MensagemUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutChatInput | MensagemCreateOrConnectWithoutChatInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutChatInput | MensagemUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MensagemCreateManyChatInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutChatInput | MensagemUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutChatInput | MensagemUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MensagemCreateWithoutChatInput, MensagemUncheckedCreateWithoutChatInput> | MensagemCreateWithoutChatInput[] | MensagemUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutChatInput | MensagemCreateOrConnectWithoutChatInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutChatInput | MensagemUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MensagemCreateManyChatInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutChatInput | MensagemUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutChatInput | MensagemUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type ChatCreateNestedOneWithoutMensagensInput = {
    create?: XOR<ChatCreateWithoutMensagensInput, ChatUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMensagensInput
    connect?: ChatWhereUniqueInput
  }

  export type ChatUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<ChatCreateWithoutMensagensInput, ChatUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMensagensInput
    upsert?: ChatUpsertWithoutMensagensInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMensagensInput, ChatUpdateWithoutMensagensInput>, ChatUncheckedUpdateWithoutMensagensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ConsultaCreateWithoutUsuarioInput = {
    horario: Date | string
    data: Date | string
    flag?: string | null
    chat?: ChatCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    horario: Date | string
    data: Date | string
    flag?: string | null
    chat?: ChatUncheckedCreateNestedOneWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutUsuarioInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsultaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutUsuarioInput, ConsultaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutUsuarioInput, ConsultaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    horario?: DateTimeFilter<"Consulta"> | Date | string
    data?: DateTimeFilter<"Consulta"> | Date | string
    flag?: StringNullableFilter<"Consulta"> | string | null
  }

  export type ChatCreateWithoutConsultaInput = {
    data_do_chat: Date | string
    hora_do_chat: Date | string
    mensagens?: MensagemCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutConsultaInput = {
    id?: number
    data_do_chat: Date | string
    hora_do_chat: Date | string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutConsultaInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutConsultaInput, ChatUncheckedCreateWithoutConsultaInput>
  }

  export type UsuarioCreateWithoutConsultaInput = {
    nome: string
    avatar: string
    idade: number
    email: string
    senha: string
    apelido?: string | null
  }

  export type UsuarioUncheckedCreateWithoutConsultaInput = {
    id?: number
    nome: string
    avatar: string
    idade: number
    email: string
    senha: string
    apelido?: string | null
  }

  export type UsuarioCreateOrConnectWithoutConsultaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput>
  }

  export type ChatUpsertWithoutConsultaInput = {
    update: XOR<ChatUpdateWithoutConsultaInput, ChatUncheckedUpdateWithoutConsultaInput>
    create: XOR<ChatCreateWithoutConsultaInput, ChatUncheckedCreateWithoutConsultaInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutConsultaInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutConsultaInput, ChatUncheckedUpdateWithoutConsultaInput>
  }

  export type ChatUpdateWithoutConsultaInput = {
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    mensagens?: MensagemUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UsuarioUpsertWithWhereUniqueWithoutConsultaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutConsultaInput, UsuarioUncheckedUpdateWithoutConsultaInput>
    create: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutConsultaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutConsultaInput, UsuarioUncheckedUpdateWithoutConsultaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutConsultaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutConsultaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    avatar?: StringFilter<"Usuario"> | string
    idade?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    apelido?: StringNullableFilter<"Usuario"> | string | null
  }

  export type ConsultaCreateWithoutChatInput = {
    horario: Date | string
    data: Date | string
    flag?: string | null
    usuario?: UsuarioCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutChatInput = {
    id?: number
    horario: Date | string
    data: Date | string
    flag?: string | null
    usuario?: UsuarioUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutChatInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutChatInput, ConsultaUncheckedCreateWithoutChatInput>
  }

  export type MensagemCreateWithoutChatInput = {
    caracteres: string
    data_envio: Date | string
  }

  export type MensagemUncheckedCreateWithoutChatInput = {
    id?: number
    caracteres: string
    data_envio: Date | string
  }

  export type MensagemCreateOrConnectWithoutChatInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutChatInput, MensagemUncheckedCreateWithoutChatInput>
  }

  export type MensagemCreateManyChatInputEnvelope = {
    data: MensagemCreateManyChatInput | MensagemCreateManyChatInput[]
  }

  export type ConsultaUpsertWithoutChatInput = {
    update: XOR<ConsultaUpdateWithoutChatInput, ConsultaUncheckedUpdateWithoutChatInput>
    create: XOR<ConsultaCreateWithoutChatInput, ConsultaUncheckedCreateWithoutChatInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutChatInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutChatInput, ConsultaUncheckedUpdateWithoutChatInput>
  }

  export type ConsultaUpdateWithoutChatInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type MensagemUpsertWithWhereUniqueWithoutChatInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutChatInput, MensagemUncheckedUpdateWithoutChatInput>
    create: XOR<MensagemCreateWithoutChatInput, MensagemUncheckedCreateWithoutChatInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutChatInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutChatInput, MensagemUncheckedUpdateWithoutChatInput>
  }

  export type MensagemUpdateManyWithWhereWithoutChatInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutChatInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    caracteres?: StringFilter<"Mensagem"> | string
    data_envio?: DateTimeFilter<"Mensagem"> | Date | string
    chat_id?: IntFilter<"Mensagem"> | number
  }

  export type ChatCreateWithoutMensagensInput = {
    data_do_chat: Date | string
    hora_do_chat: Date | string
    consulta: ConsultaCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMensagensInput = {
    id?: number
    data_do_chat: Date | string
    hora_do_chat: Date | string
    consulta_id: number
  }

  export type ChatCreateOrConnectWithoutMensagensInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMensagensInput, ChatUncheckedCreateWithoutMensagensInput>
  }

  export type ChatUpsertWithoutMensagensInput = {
    update: XOR<ChatUpdateWithoutMensagensInput, ChatUncheckedUpdateWithoutMensagensInput>
    create: XOR<ChatCreateWithoutMensagensInput, ChatUncheckedCreateWithoutMensagensInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMensagensInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMensagensInput, ChatUncheckedUpdateWithoutMensagensInput>
  }

  export type ChatUpdateWithoutMensagensInput = {
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta?: ConsultaUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMensagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    data_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_do_chat?: DateTimeFieldUpdateOperationsInput | Date | string
    consulta_id?: IntFieldUpdateOperationsInput | number
  }

  export type ConsultaUpdateWithoutUsuarioInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
    chat?: ChatUncheckedUpdateOneWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    flag?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUpdateWithoutConsultaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioUncheckedUpdateManyWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    idade?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    apelido?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemCreateManyChatInput = {
    id?: number
    caracteres: string
    data_envio: Date | string
  }

  export type MensagemUpdateWithoutChatInput = {
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MensagemUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    caracteres?: StringFieldUpdateOperationsInput | string
    data_envio?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}