
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
 * Model cms
 * 
 */
export type cms = $Result.DefaultSelection<Prisma.$cmsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model seo
 * 
 */
export type seo = $Result.DefaultSelection<Prisma.$seoPayload>
/**
 * Model clients
 * 
 */
export type clients = $Result.DefaultSelection<Prisma.$clientsPayload>
/**
 * Model invoice_details
 * 
 */
export type invoice_details = $Result.DefaultSelection<Prisma.$invoice_detailsPayload>
/**
 * Model invoices
 * 
 */
export type invoices = $Result.DefaultSelection<Prisma.$invoicesPayload>
/**
 * Model subscriptions
 * 
 */
export type subscriptions = $Result.DefaultSelection<Prisma.$subscriptionsPayload>
/**
 * Model payment_methods
 * 
 */
export type payment_methods = $Result.DefaultSelection<Prisma.$payment_methodsPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model settings
 * 
 */
export type settings = $Result.DefaultSelection<Prisma.$settingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cms
 * const cms = await prisma.cms.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Cms
   * const cms = await prisma.cms.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.cms`: Exposes CRUD operations for the **cms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cms
    * const cms = await prisma.cms.findMany()
    * ```
    */
  get cms(): Prisma.cmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seo`: Exposes CRUD operations for the **seo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seos
    * const seos = await prisma.seo.findMany()
    * ```
    */
  get seo(): Prisma.seoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.clientsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice_details`: Exposes CRUD operations for the **invoice_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoice_details
    * const invoice_details = await prisma.invoice_details.findMany()
    * ```
    */
  get invoice_details(): Prisma.invoice_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoices`: Exposes CRUD operations for the **invoices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoices.findMany()
    * ```
    */
  get invoices(): Prisma.invoicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptions`: Exposes CRUD operations for the **subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscriptions.findMany()
    * ```
    */
  get subscriptions(): Prisma.subscriptionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment_methods`: Exposes CRUD operations for the **payment_methods** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payment_methods
    * const payment_methods = await prisma.payment_methods.findMany()
    * ```
    */
  get payment_methods(): Prisma.payment_methodsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.settingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    cms: 'cms',
    users: 'users',
    seo: 'seo',
    clients: 'clients',
    invoice_details: 'invoice_details',
    invoices: 'invoices',
    subscriptions: 'subscriptions',
    payment_methods: 'payment_methods',
    transactions: 'transactions',
    settings: 'settings'
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
      modelProps: "cms" | "users" | "seo" | "clients" | "invoice_details" | "invoices" | "subscriptions" | "payment_methods" | "transactions" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cms: {
        payload: Prisma.$cmsPayload<ExtArgs>
        fields: Prisma.cmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>
          }
          findFirst: {
            args: Prisma.cmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>
          }
          findMany: {
            args: Prisma.cmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>[]
          }
          create: {
            args: Prisma.cmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>
          }
          createMany: {
            args: Prisma.cmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>[]
          }
          delete: {
            args: Prisma.cmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>
          }
          update: {
            args: Prisma.cmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>
          }
          deleteMany: {
            args: Prisma.cmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>[]
          }
          upsert: {
            args: Prisma.cmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cmsPayload>
          }
          aggregate: {
            args: Prisma.CmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCms>
          }
          groupBy: {
            args: Prisma.cmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cmsCountArgs<ExtArgs>
            result: $Utils.Optional<CmsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      seo: {
        payload: Prisma.$seoPayload<ExtArgs>
        fields: Prisma.seoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>
          }
          findFirst: {
            args: Prisma.seoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>
          }
          findMany: {
            args: Prisma.seoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>[]
          }
          create: {
            args: Prisma.seoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>
          }
          createMany: {
            args: Prisma.seoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.seoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>[]
          }
          delete: {
            args: Prisma.seoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>
          }
          update: {
            args: Prisma.seoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>
          }
          deleteMany: {
            args: Prisma.seoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.seoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>[]
          }
          upsert: {
            args: Prisma.seoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seoPayload>
          }
          aggregate: {
            args: Prisma.SeoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeo>
          }
          groupBy: {
            args: Prisma.seoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoGroupByOutputType>[]
          }
          count: {
            args: Prisma.seoCountArgs<ExtArgs>
            result: $Utils.Optional<SeoCountAggregateOutputType> | number
          }
        }
      }
      clients: {
        payload: Prisma.$clientsPayload<ExtArgs>
        fields: Prisma.clientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findFirst: {
            args: Prisma.clientsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          findMany: {
            args: Prisma.clientsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          create: {
            args: Prisma.clientsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          createMany: {
            args: Prisma.clientsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          delete: {
            args: Prisma.clientsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          update: {
            args: Prisma.clientsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          deleteMany: {
            args: Prisma.clientsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.clientsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>[]
          }
          upsert: {
            args: Prisma.clientsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.clientsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientsCountArgs<ExtArgs>
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      invoice_details: {
        payload: Prisma.$invoice_detailsPayload<ExtArgs>
        fields: Prisma.invoice_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoice_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoice_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>
          }
          findFirst: {
            args: Prisma.invoice_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoice_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>
          }
          findMany: {
            args: Prisma.invoice_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>[]
          }
          create: {
            args: Prisma.invoice_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>
          }
          createMany: {
            args: Prisma.invoice_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoice_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>[]
          }
          delete: {
            args: Prisma.invoice_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>
          }
          update: {
            args: Prisma.invoice_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>
          }
          deleteMany: {
            args: Prisma.invoice_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoice_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoice_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>[]
          }
          upsert: {
            args: Prisma.invoice_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoice_detailsPayload>
          }
          aggregate: {
            args: Prisma.Invoice_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice_details>
          }
          groupBy: {
            args: Prisma.invoice_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Invoice_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoice_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Invoice_detailsCountAggregateOutputType> | number
          }
        }
      }
      invoices: {
        payload: Prisma.$invoicesPayload<ExtArgs>
        fields: Prisma.invoicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.invoicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findFirst: {
            args: Prisma.invoicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          findMany: {
            args: Prisma.invoicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          create: {
            args: Prisma.invoicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          createMany: {
            args: Prisma.invoicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          delete: {
            args: Prisma.invoicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          update: {
            args: Prisma.invoicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          deleteMany: {
            args: Prisma.invoicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.invoicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.invoicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>[]
          }
          upsert: {
            args: Prisma.invoicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$invoicesPayload>
          }
          aggregate: {
            args: Prisma.InvoicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoices>
          }
          groupBy: {
            args: Prisma.invoicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.invoicesCountArgs<ExtArgs>
            result: $Utils.Optional<InvoicesCountAggregateOutputType> | number
          }
        }
      }
      subscriptions: {
        payload: Prisma.$subscriptionsPayload<ExtArgs>
        fields: Prisma.subscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findFirst: {
            args: Prisma.subscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          findMany: {
            args: Prisma.subscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          create: {
            args: Prisma.subscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          createMany: {
            args: Prisma.subscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          delete: {
            args: Prisma.subscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          update: {
            args: Prisma.subscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.subscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subscriptionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptions>
          }
          groupBy: {
            args: Prisma.subscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.subscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionsCountAggregateOutputType> | number
          }
        }
      }
      payment_methods: {
        payload: Prisma.$payment_methodsPayload<ExtArgs>
        fields: Prisma.payment_methodsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.payment_methodsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.payment_methodsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>
          }
          findFirst: {
            args: Prisma.payment_methodsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.payment_methodsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>
          }
          findMany: {
            args: Prisma.payment_methodsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>[]
          }
          create: {
            args: Prisma.payment_methodsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>
          }
          createMany: {
            args: Prisma.payment_methodsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.payment_methodsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>[]
          }
          delete: {
            args: Prisma.payment_methodsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>
          }
          update: {
            args: Prisma.payment_methodsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>
          }
          deleteMany: {
            args: Prisma.payment_methodsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.payment_methodsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.payment_methodsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>[]
          }
          upsert: {
            args: Prisma.payment_methodsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$payment_methodsPayload>
          }
          aggregate: {
            args: Prisma.Payment_methodsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment_methods>
          }
          groupBy: {
            args: Prisma.payment_methodsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Payment_methodsGroupByOutputType>[]
          }
          count: {
            args: Prisma.payment_methodsCountArgs<ExtArgs>
            result: $Utils.Optional<Payment_methodsCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      settings: {
        payload: Prisma.$settingsPayload<ExtArgs>
        fields: Prisma.settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findFirst: {
            args: Prisma.settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          findMany: {
            args: Prisma.settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          create: {
            args: Prisma.settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          createMany: {
            args: Prisma.settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          delete: {
            args: Prisma.settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          update: {
            args: Prisma.settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          deleteMany: {
            args: Prisma.settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>[]
          }
          upsert: {
            args: Prisma.settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$settingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.settingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    cms?: cmsOmit
    users?: usersOmit
    seo?: seoOmit
    clients?: clientsOmit
    invoice_details?: invoice_detailsOmit
    invoices?: invoicesOmit
    subscriptions?: subscriptionsOmit
    payment_methods?: payment_methodsOmit
    transactions?: transactionsOmit
    settings?: settingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CmsCountOutputType
   */

  export type CmsCountOutputType = {
    seo: number
  }

  export type CmsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seo?: boolean | CmsCountOutputTypeCountSeoArgs
  }

  // Custom InputTypes
  /**
   * CmsCountOutputType without action
   */
  export type CmsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmsCountOutputType
     */
    select?: CmsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmsCountOutputType without action
   */
  export type CmsCountOutputTypeCountSeoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seoWhereInput
  }


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    invoices: number
    transactions: number
    subscriptions: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | ClientsCountOutputTypeCountInvoicesArgs
    transactions?: boolean | ClientsCountOutputTypeCountTransactionsArgs
    subscriptions?: boolean | ClientsCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
  }


  /**
   * Count Type Invoice_detailsCountOutputType
   */

  export type Invoice_detailsCountOutputType = {
    invoices: number
  }

  export type Invoice_detailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | Invoice_detailsCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * Invoice_detailsCountOutputType without action
   */
  export type Invoice_detailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice_detailsCountOutputType
     */
    select?: Invoice_detailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Invoice_detailsCountOutputType without action
   */
  export type Invoice_detailsCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
  }


  /**
   * Count Type InvoicesCountOutputType
   */

  export type InvoicesCountOutputType = {
    transactions: number
  }

  export type InvoicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | InvoicesCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvoicesCountOutputType
     */
    select?: InvoicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvoicesCountOutputType without action
   */
  export type InvoicesCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Count Type Payment_methodsCountOutputType
   */

  export type Payment_methodsCountOutputType = {
    transactions: number
  }

  export type Payment_methodsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Payment_methodsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * Payment_methodsCountOutputType without action
   */
  export type Payment_methodsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment_methodsCountOutputType
     */
    select?: Payment_methodsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Payment_methodsCountOutputType without action
   */
  export type Payment_methodsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cms
   */

  export type AggregateCms = {
    _count: CmsCountAggregateOutputType | null
    _avg: CmsAvgAggregateOutputType | null
    _sum: CmsSumAggregateOutputType | null
    _min: CmsMinAggregateOutputType | null
    _max: CmsMaxAggregateOutputType | null
  }

  export type CmsAvgAggregateOutputType = {
    id: number | null
    main_menu: number | null
    top_menu: number | null
    side_menu: number | null
    footer_menu: number | null
    publish: number | null
    sort: number | null
  }

  export type CmsSumAggregateOutputType = {
    id: bigint | null
    main_menu: number | null
    top_menu: number | null
    side_menu: number | null
    footer_menu: number | null
    publish: number | null
    sort: bigint | null
  }

  export type CmsMinAggregateOutputType = {
    id: bigint | null
    slug: string | null
    parent: string | null
    type: string | null
    custom_url: string | null
    banner_image: string | null
    banner_image_alt_text: string | null
    banner_title: string | null
    banner_tagline: string | null
    short_description: string | null
    content: string | null
    gallery: string | null
    main_menu: number | null
    top_menu: number | null
    side_menu: number | null
    footer_menu: number | null
    publish: number | null
    sort: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CmsMaxAggregateOutputType = {
    id: bigint | null
    slug: string | null
    parent: string | null
    type: string | null
    custom_url: string | null
    banner_image: string | null
    banner_image_alt_text: string | null
    banner_title: string | null
    banner_tagline: string | null
    short_description: string | null
    content: string | null
    gallery: string | null
    main_menu: number | null
    top_menu: number | null
    side_menu: number | null
    footer_menu: number | null
    publish: number | null
    sort: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CmsCountAggregateOutputType = {
    id: number
    slug: number
    parent: number
    type: number
    custom_url: number
    banner_image: number
    banner_image_alt_text: number
    banner_title: number
    banner_tagline: number
    short_description: number
    content: number
    gallery: number
    main_menu: number
    top_menu: number
    side_menu: number
    footer_menu: number
    publish: number
    sort: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CmsAvgAggregateInputType = {
    id?: true
    main_menu?: true
    top_menu?: true
    side_menu?: true
    footer_menu?: true
    publish?: true
    sort?: true
  }

  export type CmsSumAggregateInputType = {
    id?: true
    main_menu?: true
    top_menu?: true
    side_menu?: true
    footer_menu?: true
    publish?: true
    sort?: true
  }

  export type CmsMinAggregateInputType = {
    id?: true
    slug?: true
    parent?: true
    type?: true
    custom_url?: true
    banner_image?: true
    banner_image_alt_text?: true
    banner_title?: true
    banner_tagline?: true
    short_description?: true
    content?: true
    gallery?: true
    main_menu?: true
    top_menu?: true
    side_menu?: true
    footer_menu?: true
    publish?: true
    sort?: true
    created_at?: true
    updated_at?: true
  }

  export type CmsMaxAggregateInputType = {
    id?: true
    slug?: true
    parent?: true
    type?: true
    custom_url?: true
    banner_image?: true
    banner_image_alt_text?: true
    banner_title?: true
    banner_tagline?: true
    short_description?: true
    content?: true
    gallery?: true
    main_menu?: true
    top_menu?: true
    side_menu?: true
    footer_menu?: true
    publish?: true
    sort?: true
    created_at?: true
    updated_at?: true
  }

  export type CmsCountAggregateInputType = {
    id?: true
    slug?: true
    parent?: true
    type?: true
    custom_url?: true
    banner_image?: true
    banner_image_alt_text?: true
    banner_title?: true
    banner_tagline?: true
    short_description?: true
    content?: true
    gallery?: true
    main_menu?: true
    top_menu?: true
    side_menu?: true
    footer_menu?: true
    publish?: true
    sort?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms to aggregate.
     */
    where?: cmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms to fetch.
     */
    orderBy?: cmsOrderByWithRelationInput | cmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cms
    **/
    _count?: true | CmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmsMaxAggregateInputType
  }

  export type GetCmsAggregateType<T extends CmsAggregateArgs> = {
        [P in keyof T & keyof AggregateCms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCms[P]>
      : GetScalarType<T[P], AggregateCms[P]>
  }




  export type cmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cmsWhereInput
    orderBy?: cmsOrderByWithAggregationInput | cmsOrderByWithAggregationInput[]
    by: CmsScalarFieldEnum[] | CmsScalarFieldEnum
    having?: cmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmsCountAggregateInputType | true
    _avg?: CmsAvgAggregateInputType
    _sum?: CmsSumAggregateInputType
    _min?: CmsMinAggregateInputType
    _max?: CmsMaxAggregateInputType
  }

  export type CmsGroupByOutputType = {
    id: bigint
    slug: string
    parent: string | null
    type: string | null
    custom_url: string | null
    banner_image: string | null
    banner_image_alt_text: string | null
    banner_title: string | null
    banner_tagline: string | null
    short_description: string | null
    content: string | null
    gallery: string | null
    main_menu: number | null
    top_menu: number | null
    side_menu: number | null
    footer_menu: number | null
    publish: number | null
    sort: bigint | null
    created_at: Date
    updated_at: Date
    _count: CmsCountAggregateOutputType | null
    _avg: CmsAvgAggregateOutputType | null
    _sum: CmsSumAggregateOutputType | null
    _min: CmsMinAggregateOutputType | null
    _max: CmsMaxAggregateOutputType | null
  }

  type GetCmsGroupByPayload<T extends cmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmsGroupByOutputType[P]>
            : GetScalarType<T[P], CmsGroupByOutputType[P]>
        }
      >
    >


  export type cmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    parent?: boolean
    type?: boolean
    custom_url?: boolean
    banner_image?: boolean
    banner_image_alt_text?: boolean
    banner_title?: boolean
    banner_tagline?: boolean
    short_description?: boolean
    content?: boolean
    gallery?: boolean
    main_menu?: boolean
    top_menu?: boolean
    side_menu?: boolean
    footer_menu?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
    seo?: boolean | cms$seoArgs<ExtArgs>
    _count?: boolean | CmsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cms"]>

  export type cmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    parent?: boolean
    type?: boolean
    custom_url?: boolean
    banner_image?: boolean
    banner_image_alt_text?: boolean
    banner_title?: boolean
    banner_tagline?: boolean
    short_description?: boolean
    content?: boolean
    gallery?: boolean
    main_menu?: boolean
    top_menu?: boolean
    side_menu?: boolean
    footer_menu?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cms"]>

  export type cmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    parent?: boolean
    type?: boolean
    custom_url?: boolean
    banner_image?: boolean
    banner_image_alt_text?: boolean
    banner_title?: boolean
    banner_tagline?: boolean
    short_description?: boolean
    content?: boolean
    gallery?: boolean
    main_menu?: boolean
    top_menu?: boolean
    side_menu?: boolean
    footer_menu?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["cms"]>

  export type cmsSelectScalar = {
    id?: boolean
    slug?: boolean
    parent?: boolean
    type?: boolean
    custom_url?: boolean
    banner_image?: boolean
    banner_image_alt_text?: boolean
    banner_title?: boolean
    banner_tagline?: boolean
    short_description?: boolean
    content?: boolean
    gallery?: boolean
    main_menu?: boolean
    top_menu?: boolean
    side_menu?: boolean
    footer_menu?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "parent" | "type" | "custom_url" | "banner_image" | "banner_image_alt_text" | "banner_title" | "banner_tagline" | "short_description" | "content" | "gallery" | "main_menu" | "top_menu" | "side_menu" | "footer_menu" | "publish" | "sort" | "created_at" | "updated_at", ExtArgs["result"]["cms"]>
  export type cmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seo?: boolean | cms$seoArgs<ExtArgs>
    _count?: boolean | CmsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type cmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cms"
    objects: {
      seo: Prisma.$seoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      slug: string
      parent: string | null
      type: string | null
      custom_url: string | null
      banner_image: string | null
      banner_image_alt_text: string | null
      banner_title: string | null
      banner_tagline: string | null
      short_description: string | null
      content: string | null
      gallery: string | null
      main_menu: number | null
      top_menu: number | null
      side_menu: number | null
      footer_menu: number | null
      publish: number | null
      sort: bigint | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["cms"]>
    composites: {}
  }

  type cmsGetPayload<S extends boolean | null | undefined | cmsDefaultArgs> = $Result.GetResult<Prisma.$cmsPayload, S>

  type cmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmsCountAggregateInputType | true
    }

  export interface cmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cms'], meta: { name: 'cms' } }
    /**
     * Find zero or one Cms that matches the filter.
     * @param {cmsFindUniqueArgs} args - Arguments to find a Cms
     * @example
     * // Get one Cms
     * const cms = await prisma.cms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cmsFindUniqueArgs>(args: SelectSubset<T, cmsFindUniqueArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cmsFindUniqueOrThrowArgs} args - Arguments to find a Cms
     * @example
     * // Get one Cms
     * const cms = await prisma.cms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cmsFindUniqueOrThrowArgs>(args: SelectSubset<T, cmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cmsFindFirstArgs} args - Arguments to find a Cms
     * @example
     * // Get one Cms
     * const cms = await prisma.cms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cmsFindFirstArgs>(args?: SelectSubset<T, cmsFindFirstArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cmsFindFirstOrThrowArgs} args - Arguments to find a Cms
     * @example
     * // Get one Cms
     * const cms = await prisma.cms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cmsFindFirstOrThrowArgs>(args?: SelectSubset<T, cmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cms
     * const cms = await prisma.cms.findMany()
     * 
     * // Get first 10 Cms
     * const cms = await prisma.cms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmsWithIdOnly = await prisma.cms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cmsFindManyArgs>(args?: SelectSubset<T, cmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cms.
     * @param {cmsCreateArgs} args - Arguments to create a Cms.
     * @example
     * // Create one Cms
     * const Cms = await prisma.cms.create({
     *   data: {
     *     // ... data to create a Cms
     *   }
     * })
     * 
     */
    create<T extends cmsCreateArgs>(args: SelectSubset<T, cmsCreateArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cms.
     * @param {cmsCreateManyArgs} args - Arguments to create many Cms.
     * @example
     * // Create many Cms
     * const cms = await prisma.cms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cmsCreateManyArgs>(args?: SelectSubset<T, cmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cms and returns the data saved in the database.
     * @param {cmsCreateManyAndReturnArgs} args - Arguments to create many Cms.
     * @example
     * // Create many Cms
     * const cms = await prisma.cms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cms and only return the `id`
     * const cmsWithIdOnly = await prisma.cms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cmsCreateManyAndReturnArgs>(args?: SelectSubset<T, cmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cms.
     * @param {cmsDeleteArgs} args - Arguments to delete one Cms.
     * @example
     * // Delete one Cms
     * const Cms = await prisma.cms.delete({
     *   where: {
     *     // ... filter to delete one Cms
     *   }
     * })
     * 
     */
    delete<T extends cmsDeleteArgs>(args: SelectSubset<T, cmsDeleteArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cms.
     * @param {cmsUpdateArgs} args - Arguments to update one Cms.
     * @example
     * // Update one Cms
     * const cms = await prisma.cms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cmsUpdateArgs>(args: SelectSubset<T, cmsUpdateArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cms.
     * @param {cmsDeleteManyArgs} args - Arguments to filter Cms to delete.
     * @example
     * // Delete a few Cms
     * const { count } = await prisma.cms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cmsDeleteManyArgs>(args?: SelectSubset<T, cmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cms
     * const cms = await prisma.cms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cmsUpdateManyArgs>(args: SelectSubset<T, cmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cms and returns the data updated in the database.
     * @param {cmsUpdateManyAndReturnArgs} args - Arguments to update many Cms.
     * @example
     * // Update many Cms
     * const cms = await prisma.cms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cms and only return the `id`
     * const cmsWithIdOnly = await prisma.cms.updateManyAndReturn({
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
    updateManyAndReturn<T extends cmsUpdateManyAndReturnArgs>(args: SelectSubset<T, cmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cms.
     * @param {cmsUpsertArgs} args - Arguments to update or create a Cms.
     * @example
     * // Update or create a Cms
     * const cms = await prisma.cms.upsert({
     *   create: {
     *     // ... data to create a Cms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cms we want to update
     *   }
     * })
     */
    upsert<T extends cmsUpsertArgs>(args: SelectSubset<T, cmsUpsertArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cmsCountArgs} args - Arguments to filter Cms to count.
     * @example
     * // Count the number of Cms
     * const count = await prisma.cms.count({
     *   where: {
     *     // ... the filter for the Cms we want to count
     *   }
     * })
    **/
    count<T extends cmsCountArgs>(
      args?: Subset<T, cmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmsAggregateArgs>(args: Subset<T, CmsAggregateArgs>): Prisma.PrismaPromise<GetCmsAggregateType<T>>

    /**
     * Group by Cms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cmsGroupByArgs} args - Group by arguments.
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
      T extends cmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cmsGroupByArgs['orderBy'] }
        : { orderBy?: cmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cms model
   */
  readonly fields: cmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seo<T extends cms$seoArgs<ExtArgs> = {}>(args?: Subset<T, cms$seoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the cms model
   */
  interface cmsFieldRefs {
    readonly id: FieldRef<"cms", 'BigInt'>
    readonly slug: FieldRef<"cms", 'String'>
    readonly parent: FieldRef<"cms", 'String'>
    readonly type: FieldRef<"cms", 'String'>
    readonly custom_url: FieldRef<"cms", 'String'>
    readonly banner_image: FieldRef<"cms", 'String'>
    readonly banner_image_alt_text: FieldRef<"cms", 'String'>
    readonly banner_title: FieldRef<"cms", 'String'>
    readonly banner_tagline: FieldRef<"cms", 'String'>
    readonly short_description: FieldRef<"cms", 'String'>
    readonly content: FieldRef<"cms", 'String'>
    readonly gallery: FieldRef<"cms", 'String'>
    readonly main_menu: FieldRef<"cms", 'Int'>
    readonly top_menu: FieldRef<"cms", 'Int'>
    readonly side_menu: FieldRef<"cms", 'Int'>
    readonly footer_menu: FieldRef<"cms", 'Int'>
    readonly publish: FieldRef<"cms", 'Int'>
    readonly sort: FieldRef<"cms", 'BigInt'>
    readonly created_at: FieldRef<"cms", 'DateTime'>
    readonly updated_at: FieldRef<"cms", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cms findUnique
   */
  export type cmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * Filter, which cms to fetch.
     */
    where: cmsWhereUniqueInput
  }

  /**
   * cms findUniqueOrThrow
   */
  export type cmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * Filter, which cms to fetch.
     */
    where: cmsWhereUniqueInput
  }

  /**
   * cms findFirst
   */
  export type cmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * Filter, which cms to fetch.
     */
    where?: cmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms to fetch.
     */
    orderBy?: cmsOrderByWithRelationInput | cmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms.
     */
    cursor?: cmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms.
     */
    distinct?: CmsScalarFieldEnum | CmsScalarFieldEnum[]
  }

  /**
   * cms findFirstOrThrow
   */
  export type cmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * Filter, which cms to fetch.
     */
    where?: cmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms to fetch.
     */
    orderBy?: cmsOrderByWithRelationInput | cmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cms.
     */
    cursor?: cmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cms.
     */
    distinct?: CmsScalarFieldEnum | CmsScalarFieldEnum[]
  }

  /**
   * cms findMany
   */
  export type cmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * Filter, which cms to fetch.
     */
    where?: cmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cms to fetch.
     */
    orderBy?: cmsOrderByWithRelationInput | cmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cms.
     */
    cursor?: cmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cms.
     */
    skip?: number
    distinct?: CmsScalarFieldEnum | CmsScalarFieldEnum[]
  }

  /**
   * cms create
   */
  export type cmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * The data needed to create a cms.
     */
    data: XOR<cmsCreateInput, cmsUncheckedCreateInput>
  }

  /**
   * cms createMany
   */
  export type cmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cms.
     */
    data: cmsCreateManyInput | cmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms createManyAndReturn
   */
  export type cmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * The data used to create many cms.
     */
    data: cmsCreateManyInput | cmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cms update
   */
  export type cmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * The data needed to update a cms.
     */
    data: XOR<cmsUpdateInput, cmsUncheckedUpdateInput>
    /**
     * Choose, which cms to update.
     */
    where: cmsWhereUniqueInput
  }

  /**
   * cms updateMany
   */
  export type cmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cms.
     */
    data: XOR<cmsUpdateManyMutationInput, cmsUncheckedUpdateManyInput>
    /**
     * Filter which cms to update
     */
    where?: cmsWhereInput
    /**
     * Limit how many cms to update.
     */
    limit?: number
  }

  /**
   * cms updateManyAndReturn
   */
  export type cmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * The data used to update cms.
     */
    data: XOR<cmsUpdateManyMutationInput, cmsUncheckedUpdateManyInput>
    /**
     * Filter which cms to update
     */
    where?: cmsWhereInput
    /**
     * Limit how many cms to update.
     */
    limit?: number
  }

  /**
   * cms upsert
   */
  export type cmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * The filter to search for the cms to update in case it exists.
     */
    where: cmsWhereUniqueInput
    /**
     * In case the cms found by the `where` argument doesn't exist, create a new cms with this data.
     */
    create: XOR<cmsCreateInput, cmsUncheckedCreateInput>
    /**
     * In case the cms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cmsUpdateInput, cmsUncheckedUpdateInput>
  }

  /**
   * cms delete
   */
  export type cmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    /**
     * Filter which cms to delete.
     */
    where: cmsWhereUniqueInput
  }

  /**
   * cms deleteMany
   */
  export type cmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cms to delete
     */
    where?: cmsWhereInput
    /**
     * Limit how many cms to delete.
     */
    limit?: number
  }

  /**
   * cms.seo
   */
  export type cms$seoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    where?: seoWhereInput
    orderBy?: seoOrderByWithRelationInput | seoOrderByWithRelationInput[]
    cursor?: seoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeoScalarFieldEnum | SeoScalarFieldEnum[]
  }

  /**
   * cms without action
   */
  export type cmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    mobile: string | null
    email: string | null
    password: string | null
    address: string | null
    profilePic: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    mobile: string | null
    email: string | null
    password: string | null
    address: string | null
    profilePic: string | null
    role: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    email: number
    password: number
    address: number
    profilePic: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    password?: true
    address?: true
    profilePic?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    password?: true
    address?: true
    profilePic?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    password?: true
    address?: true
    profilePic?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    name: string
    mobile: string
    email: string
    password: string
    address: string | null
    profilePic: string | null
    role: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    profilePic?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    profilePic?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    profilePic?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    profilePic?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "email" | "password" | "address" | "profilePic" | "role" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      mobile: string
      email: string
      password: string
      address: string | null
      profilePic: string | null
      role: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly name: FieldRef<"users", 'String'>
    readonly mobile: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly address: FieldRef<"users", 'String'>
    readonly profilePic: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model seo
   */

  export type AggregateSeo = {
    _count: SeoCountAggregateOutputType | null
    _avg: SeoAvgAggregateOutputType | null
    _sum: SeoSumAggregateOutputType | null
    _min: SeoMinAggregateOutputType | null
    _max: SeoMaxAggregateOutputType | null
  }

  export type SeoAvgAggregateOutputType = {
    id: number | null
    cms_id: number | null
  }

  export type SeoSumAggregateOutputType = {
    id: bigint | null
    cms_id: bigint | null
  }

  export type SeoMinAggregateOutputType = {
    id: bigint | null
    cms_id: bigint | null
    seo_title: string | null
    seo_keywords: string | null
    seo_description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SeoMaxAggregateOutputType = {
    id: bigint | null
    cms_id: bigint | null
    seo_title: string | null
    seo_keywords: string | null
    seo_description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SeoCountAggregateOutputType = {
    id: number
    cms_id: number
    seo_title: number
    seo_keywords: number
    seo_description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SeoAvgAggregateInputType = {
    id?: true
    cms_id?: true
  }

  export type SeoSumAggregateInputType = {
    id?: true
    cms_id?: true
  }

  export type SeoMinAggregateInputType = {
    id?: true
    cms_id?: true
    seo_title?: true
    seo_keywords?: true
    seo_description?: true
    created_at?: true
    updated_at?: true
  }

  export type SeoMaxAggregateInputType = {
    id?: true
    cms_id?: true
    seo_title?: true
    seo_keywords?: true
    seo_description?: true
    created_at?: true
    updated_at?: true
  }

  export type SeoCountAggregateInputType = {
    id?: true
    cms_id?: true
    seo_title?: true
    seo_keywords?: true
    seo_description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SeoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seo to aggregate.
     */
    where?: seoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seos to fetch.
     */
    orderBy?: seoOrderByWithRelationInput | seoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seos
    **/
    _count?: true | SeoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoMaxAggregateInputType
  }

  export type GetSeoAggregateType<T extends SeoAggregateArgs> = {
        [P in keyof T & keyof AggregateSeo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeo[P]>
      : GetScalarType<T[P], AggregateSeo[P]>
  }




  export type seoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seoWhereInput
    orderBy?: seoOrderByWithAggregationInput | seoOrderByWithAggregationInput[]
    by: SeoScalarFieldEnum[] | SeoScalarFieldEnum
    having?: seoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoCountAggregateInputType | true
    _avg?: SeoAvgAggregateInputType
    _sum?: SeoSumAggregateInputType
    _min?: SeoMinAggregateInputType
    _max?: SeoMaxAggregateInputType
  }

  export type SeoGroupByOutputType = {
    id: bigint
    cms_id: bigint | null
    seo_title: string | null
    seo_keywords: string | null
    seo_description: string | null
    created_at: Date
    updated_at: Date
    _count: SeoCountAggregateOutputType | null
    _avg: SeoAvgAggregateOutputType | null
    _sum: SeoSumAggregateOutputType | null
    _min: SeoMinAggregateOutputType | null
    _max: SeoMaxAggregateOutputType | null
  }

  type GetSeoGroupByPayload<T extends seoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoGroupByOutputType[P]>
            : GetScalarType<T[P], SeoGroupByOutputType[P]>
        }
      >
    >


  export type seoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cms_id?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    cms?: boolean | seo$cmsArgs<ExtArgs>
  }, ExtArgs["result"]["seo"]>

  export type seoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cms_id?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    cms?: boolean | seo$cmsArgs<ExtArgs>
  }, ExtArgs["result"]["seo"]>

  export type seoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cms_id?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    cms?: boolean | seo$cmsArgs<ExtArgs>
  }, ExtArgs["result"]["seo"]>

  export type seoSelectScalar = {
    id?: boolean
    cms_id?: boolean
    seo_title?: boolean
    seo_keywords?: boolean
    seo_description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type seoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cms_id" | "seo_title" | "seo_keywords" | "seo_description" | "created_at" | "updated_at", ExtArgs["result"]["seo"]>
  export type seoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cms?: boolean | seo$cmsArgs<ExtArgs>
  }
  export type seoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cms?: boolean | seo$cmsArgs<ExtArgs>
  }
  export type seoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cms?: boolean | seo$cmsArgs<ExtArgs>
  }

  export type $seoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seo"
    objects: {
      cms: Prisma.$cmsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      cms_id: bigint | null
      seo_title: string | null
      seo_keywords: string | null
      seo_description: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["seo"]>
    composites: {}
  }

  type seoGetPayload<S extends boolean | null | undefined | seoDefaultArgs> = $Result.GetResult<Prisma.$seoPayload, S>

  type seoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoCountAggregateInputType | true
    }

  export interface seoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seo'], meta: { name: 'seo' } }
    /**
     * Find zero or one Seo that matches the filter.
     * @param {seoFindUniqueArgs} args - Arguments to find a Seo
     * @example
     * // Get one Seo
     * const seo = await prisma.seo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seoFindUniqueArgs>(args: SelectSubset<T, seoFindUniqueArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seoFindUniqueOrThrowArgs} args - Arguments to find a Seo
     * @example
     * // Get one Seo
     * const seo = await prisma.seo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seoFindUniqueOrThrowArgs>(args: SelectSubset<T, seoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seoFindFirstArgs} args - Arguments to find a Seo
     * @example
     * // Get one Seo
     * const seo = await prisma.seo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seoFindFirstArgs>(args?: SelectSubset<T, seoFindFirstArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seoFindFirstOrThrowArgs} args - Arguments to find a Seo
     * @example
     * // Get one Seo
     * const seo = await prisma.seo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seoFindFirstOrThrowArgs>(args?: SelectSubset<T, seoFindFirstOrThrowArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seos
     * const seos = await prisma.seo.findMany()
     * 
     * // Get first 10 Seos
     * const seos = await prisma.seo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoWithIdOnly = await prisma.seo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seoFindManyArgs>(args?: SelectSubset<T, seoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seo.
     * @param {seoCreateArgs} args - Arguments to create a Seo.
     * @example
     * // Create one Seo
     * const Seo = await prisma.seo.create({
     *   data: {
     *     // ... data to create a Seo
     *   }
     * })
     * 
     */
    create<T extends seoCreateArgs>(args: SelectSubset<T, seoCreateArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seos.
     * @param {seoCreateManyArgs} args - Arguments to create many Seos.
     * @example
     * // Create many Seos
     * const seo = await prisma.seo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seoCreateManyArgs>(args?: SelectSubset<T, seoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seos and returns the data saved in the database.
     * @param {seoCreateManyAndReturnArgs} args - Arguments to create many Seos.
     * @example
     * // Create many Seos
     * const seo = await prisma.seo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seos and only return the `id`
     * const seoWithIdOnly = await prisma.seo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends seoCreateManyAndReturnArgs>(args?: SelectSubset<T, seoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seo.
     * @param {seoDeleteArgs} args - Arguments to delete one Seo.
     * @example
     * // Delete one Seo
     * const Seo = await prisma.seo.delete({
     *   where: {
     *     // ... filter to delete one Seo
     *   }
     * })
     * 
     */
    delete<T extends seoDeleteArgs>(args: SelectSubset<T, seoDeleteArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seo.
     * @param {seoUpdateArgs} args - Arguments to update one Seo.
     * @example
     * // Update one Seo
     * const seo = await prisma.seo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seoUpdateArgs>(args: SelectSubset<T, seoUpdateArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seos.
     * @param {seoDeleteManyArgs} args - Arguments to filter Seos to delete.
     * @example
     * // Delete a few Seos
     * const { count } = await prisma.seo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seoDeleteManyArgs>(args?: SelectSubset<T, seoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seos
     * const seo = await prisma.seo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seoUpdateManyArgs>(args: SelectSubset<T, seoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seos and returns the data updated in the database.
     * @param {seoUpdateManyAndReturnArgs} args - Arguments to update many Seos.
     * @example
     * // Update many Seos
     * const seo = await prisma.seo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seos and only return the `id`
     * const seoWithIdOnly = await prisma.seo.updateManyAndReturn({
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
    updateManyAndReturn<T extends seoUpdateManyAndReturnArgs>(args: SelectSubset<T, seoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seo.
     * @param {seoUpsertArgs} args - Arguments to update or create a Seo.
     * @example
     * // Update or create a Seo
     * const seo = await prisma.seo.upsert({
     *   create: {
     *     // ... data to create a Seo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seo we want to update
     *   }
     * })
     */
    upsert<T extends seoUpsertArgs>(args: SelectSubset<T, seoUpsertArgs<ExtArgs>>): Prisma__seoClient<$Result.GetResult<Prisma.$seoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seoCountArgs} args - Arguments to filter Seos to count.
     * @example
     * // Count the number of Seos
     * const count = await prisma.seo.count({
     *   where: {
     *     // ... the filter for the Seos we want to count
     *   }
     * })
    **/
    count<T extends seoCountArgs>(
      args?: Subset<T, seoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeoAggregateArgs>(args: Subset<T, SeoAggregateArgs>): Prisma.PrismaPromise<GetSeoAggregateType<T>>

    /**
     * Group by Seo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seoGroupByArgs} args - Group by arguments.
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
      T extends seoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seoGroupByArgs['orderBy'] }
        : { orderBy?: seoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, seoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seo model
   */
  readonly fields: seoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cms<T extends seo$cmsArgs<ExtArgs> = {}>(args?: Subset<T, seo$cmsArgs<ExtArgs>>): Prisma__cmsClient<$Result.GetResult<Prisma.$cmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the seo model
   */
  interface seoFieldRefs {
    readonly id: FieldRef<"seo", 'BigInt'>
    readonly cms_id: FieldRef<"seo", 'BigInt'>
    readonly seo_title: FieldRef<"seo", 'String'>
    readonly seo_keywords: FieldRef<"seo", 'String'>
    readonly seo_description: FieldRef<"seo", 'String'>
    readonly created_at: FieldRef<"seo", 'DateTime'>
    readonly updated_at: FieldRef<"seo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * seo findUnique
   */
  export type seoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * Filter, which seo to fetch.
     */
    where: seoWhereUniqueInput
  }

  /**
   * seo findUniqueOrThrow
   */
  export type seoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * Filter, which seo to fetch.
     */
    where: seoWhereUniqueInput
  }

  /**
   * seo findFirst
   */
  export type seoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * Filter, which seo to fetch.
     */
    where?: seoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seos to fetch.
     */
    orderBy?: seoOrderByWithRelationInput | seoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seos.
     */
    cursor?: seoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seos.
     */
    distinct?: SeoScalarFieldEnum | SeoScalarFieldEnum[]
  }

  /**
   * seo findFirstOrThrow
   */
  export type seoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * Filter, which seo to fetch.
     */
    where?: seoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seos to fetch.
     */
    orderBy?: seoOrderByWithRelationInput | seoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seos.
     */
    cursor?: seoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seos.
     */
    distinct?: SeoScalarFieldEnum | SeoScalarFieldEnum[]
  }

  /**
   * seo findMany
   */
  export type seoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * Filter, which seos to fetch.
     */
    where?: seoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seos to fetch.
     */
    orderBy?: seoOrderByWithRelationInput | seoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seos.
     */
    cursor?: seoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seos.
     */
    skip?: number
    distinct?: SeoScalarFieldEnum | SeoScalarFieldEnum[]
  }

  /**
   * seo create
   */
  export type seoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * The data needed to create a seo.
     */
    data?: XOR<seoCreateInput, seoUncheckedCreateInput>
  }

  /**
   * seo createMany
   */
  export type seoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seos.
     */
    data: seoCreateManyInput | seoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seo createManyAndReturn
   */
  export type seoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * The data used to create many seos.
     */
    data: seoCreateManyInput | seoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * seo update
   */
  export type seoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * The data needed to update a seo.
     */
    data: XOR<seoUpdateInput, seoUncheckedUpdateInput>
    /**
     * Choose, which seo to update.
     */
    where: seoWhereUniqueInput
  }

  /**
   * seo updateMany
   */
  export type seoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seos.
     */
    data: XOR<seoUpdateManyMutationInput, seoUncheckedUpdateManyInput>
    /**
     * Filter which seos to update
     */
    where?: seoWhereInput
    /**
     * Limit how many seos to update.
     */
    limit?: number
  }

  /**
   * seo updateManyAndReturn
   */
  export type seoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * The data used to update seos.
     */
    data: XOR<seoUpdateManyMutationInput, seoUncheckedUpdateManyInput>
    /**
     * Filter which seos to update
     */
    where?: seoWhereInput
    /**
     * Limit how many seos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * seo upsert
   */
  export type seoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * The filter to search for the seo to update in case it exists.
     */
    where: seoWhereUniqueInput
    /**
     * In case the seo found by the `where` argument doesn't exist, create a new seo with this data.
     */
    create: XOR<seoCreateInput, seoUncheckedCreateInput>
    /**
     * In case the seo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seoUpdateInput, seoUncheckedUpdateInput>
  }

  /**
   * seo delete
   */
  export type seoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
    /**
     * Filter which seo to delete.
     */
    where: seoWhereUniqueInput
  }

  /**
   * seo deleteMany
   */
  export type seoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seos to delete
     */
    where?: seoWhereInput
    /**
     * Limit how many seos to delete.
     */
    limit?: number
  }

  /**
   * seo.cms
   */
  export type seo$cmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cms
     */
    select?: cmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cms
     */
    omit?: cmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cmsInclude<ExtArgs> | null
    where?: cmsWhereInput
  }

  /**
   * seo without action
   */
  export type seoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seo
     */
    select?: seoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seo
     */
    omit?: seoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seoInclude<ExtArgs> | null
  }


  /**
   * Model clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientsSumAggregateOutputType = {
    id: bigint | null
  }

  export type ClientsMinAggregateOutputType = {
    id: bigint | null
    client_name: string | null
    email: string | null
    mobile: string | null
    company_name: string | null
    password: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: bigint | null
    client_name: string | null
    email: string | null
    mobile: string | null
    company_name: string | null
    password: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    client_name: number
    email: number
    mobile: number
    company_name: number
    password: number
    address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ClientsAvgAggregateInputType = {
    id?: true
  }

  export type ClientsSumAggregateInputType = {
    id?: true
  }

  export type ClientsMinAggregateInputType = {
    id?: true
    client_name?: true
    email?: true
    mobile?: true
    company_name?: true
    password?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    client_name?: true
    email?: true
    mobile?: true
    company_name?: true
    password?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    client_name?: true
    email?: true
    mobile?: true
    company_name?: true
    password?: true
    address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to aggregate.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type clientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientsWhereInput
    orderBy?: clientsOrderByWithAggregationInput | clientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: clientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _avg?: ClientsAvgAggregateInputType
    _sum?: ClientsSumAggregateInputType
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: bigint
    client_name: string
    email: string
    mobile: string
    company_name: string | null
    password: string
    address: string | null
    created_at: Date
    updated_at: Date
    _count: ClientsCountAggregateOutputType | null
    _avg: ClientsAvgAggregateOutputType | null
    _sum: ClientsSumAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends clientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type clientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    email?: boolean
    mobile?: boolean
    company_name?: boolean
    password?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    invoices?: boolean | clients$invoicesArgs<ExtArgs>
    transactions?: boolean | clients$transactionsArgs<ExtArgs>
    subscriptions?: boolean | clients$subscriptionsArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    email?: boolean
    mobile?: boolean
    company_name?: boolean
    password?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_name?: boolean
    email?: boolean
    mobile?: boolean
    company_name?: boolean
    password?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["clients"]>

  export type clientsSelectScalar = {
    id?: boolean
    client_name?: boolean
    email?: boolean
    mobile?: boolean
    company_name?: boolean
    password?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type clientsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_name" | "email" | "mobile" | "company_name" | "password" | "address" | "created_at" | "updated_at", ExtArgs["result"]["clients"]>
  export type clientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | clients$invoicesArgs<ExtArgs>
    transactions?: boolean | clients$transactionsArgs<ExtArgs>
    subscriptions?: boolean | clients$subscriptionsArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type clientsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type clientsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $clientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clients"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
      subscriptions: Prisma.$subscriptionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      client_name: string
      email: string
      mobile: string
      company_name: string | null
      password: string
      address: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }

  type clientsGetPayload<S extends boolean | null | undefined | clientsDefaultArgs> = $Result.GetResult<Prisma.$clientsPayload, S>

  type clientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clientsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface clientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clients'], meta: { name: 'clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {clientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientsFindUniqueArgs>(args: SelectSubset<T, clientsFindUniqueArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clients that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientsFindUniqueOrThrowArgs>(args: SelectSubset<T, clientsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientsFindFirstArgs>(args?: SelectSubset<T, clientsFindFirstArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientsFindFirstOrThrowArgs>(args?: SelectSubset<T, clientsFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clientsFindManyArgs>(args?: SelectSubset<T, clientsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clients.
     * @param {clientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
     */
    create<T extends clientsCreateArgs>(args: SelectSubset<T, clientsCreateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {clientsCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientsCreateManyArgs>(args?: SelectSubset<T, clientsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientsCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const clients = await prisma.clients.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientsCreateManyAndReturnArgs>(args?: SelectSubset<T, clientsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clients.
     * @param {clientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
     */
    delete<T extends clientsDeleteArgs>(args: SelectSubset<T, clientsDeleteArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clients.
     * @param {clientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientsUpdateArgs>(args: SelectSubset<T, clientsUpdateArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {clientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientsDeleteManyArgs>(args?: SelectSubset<T, clientsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientsUpdateManyArgs>(args: SelectSubset<T, clientsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {clientsUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientsWithIdOnly = await prisma.clients.updateManyAndReturn({
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
    updateManyAndReturn<T extends clientsUpdateManyAndReturnArgs>(args: SelectSubset<T, clientsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clients.
     * @param {clientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
     */
    upsert<T extends clientsUpsertArgs>(args: SelectSubset<T, clientsUpsertArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientsCountArgs>(
      args?: Subset<T, clientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientsGroupByArgs} args - Group by arguments.
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
      T extends clientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientsGroupByArgs['orderBy'] }
        : { orderBy?: clientsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clients model
   */
  readonly fields: clientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends clients$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, clients$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends clients$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, clients$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends clients$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, clients$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the clients model
   */
  interface clientsFieldRefs {
    readonly id: FieldRef<"clients", 'BigInt'>
    readonly client_name: FieldRef<"clients", 'String'>
    readonly email: FieldRef<"clients", 'String'>
    readonly mobile: FieldRef<"clients", 'String'>
    readonly company_name: FieldRef<"clients", 'String'>
    readonly password: FieldRef<"clients", 'String'>
    readonly address: FieldRef<"clients", 'String'>
    readonly created_at: FieldRef<"clients", 'DateTime'>
    readonly updated_at: FieldRef<"clients", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * clients findUnique
   */
  export type clientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findUniqueOrThrow
   */
  export type clientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients findFirst
   */
  export type clientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findFirstOrThrow
   */
  export type clientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients findMany
   */
  export type clientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientsOrderByWithRelationInput | clientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }

  /**
   * clients create
   */
  export type clientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to create a clients.
     */
    data: XOR<clientsCreateInput, clientsUncheckedCreateInput>
  }

  /**
   * clients createMany
   */
  export type clientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients createManyAndReturn
   */
  export type clientsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientsCreateManyInput | clientsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clients update
   */
  export type clientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The data needed to update a clients.
     */
    data: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
    /**
     * Choose, which clients to update.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients updateMany
   */
  export type clientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients updateManyAndReturn
   */
  export type clientsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * The data used to update clients.
     */
    data: XOR<clientsUpdateManyMutationInput, clientsUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to update.
     */
    limit?: number
  }

  /**
   * clients upsert
   */
  export type clientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * The filter to search for the clients to update in case it exists.
     */
    where: clientsWhereUniqueInput
    /**
     * In case the clients found by the `where` argument doesn't exist, create a new clients with this data.
     */
    create: XOR<clientsCreateInput, clientsUncheckedCreateInput>
    /**
     * In case the clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientsUpdateInput, clientsUncheckedUpdateInput>
  }

  /**
   * clients delete
   */
  export type clientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
    /**
     * Filter which clients to delete.
     */
    where: clientsWhereUniqueInput
  }

  /**
   * clients deleteMany
   */
  export type clientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientsWhereInput
    /**
     * Limit how many clients to delete.
     */
    limit?: number
  }

  /**
   * clients.invoices
   */
  export type clients$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * clients.transactions
   */
  export type clients$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * clients.subscriptions
   */
  export type clients$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    cursor?: subscriptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * clients without action
   */
  export type clientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clients
     */
    select?: clientsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clients
     */
    omit?: clientsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientsInclude<ExtArgs> | null
  }


  /**
   * Model invoice_details
   */

  export type AggregateInvoice_details = {
    _count: Invoice_detailsCountAggregateOutputType | null
    _avg: Invoice_detailsAvgAggregateOutputType | null
    _sum: Invoice_detailsSumAggregateOutputType | null
    _min: Invoice_detailsMinAggregateOutputType | null
    _max: Invoice_detailsMaxAggregateOutputType | null
  }

  export type Invoice_detailsAvgAggregateOutputType = {
    id: number | null
  }

  export type Invoice_detailsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Invoice_detailsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    amount: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Invoice_detailsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    amount: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Invoice_detailsCountAggregateOutputType = {
    id: number
    name: number
    amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Invoice_detailsAvgAggregateInputType = {
    id?: true
  }

  export type Invoice_detailsSumAggregateInputType = {
    id?: true
  }

  export type Invoice_detailsMinAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    created_at?: true
    updated_at?: true
  }

  export type Invoice_detailsMaxAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    created_at?: true
    updated_at?: true
  }

  export type Invoice_detailsCountAggregateInputType = {
    id?: true
    name?: true
    amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Invoice_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_details to aggregate.
     */
    where?: invoice_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_details to fetch.
     */
    orderBy?: invoice_detailsOrderByWithRelationInput | invoice_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoice_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoice_details
    **/
    _count?: true | Invoice_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Invoice_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Invoice_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Invoice_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Invoice_detailsMaxAggregateInputType
  }

  export type GetInvoice_detailsAggregateType<T extends Invoice_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice_details[P]>
      : GetScalarType<T[P], AggregateInvoice_details[P]>
  }




  export type invoice_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoice_detailsWhereInput
    orderBy?: invoice_detailsOrderByWithAggregationInput | invoice_detailsOrderByWithAggregationInput[]
    by: Invoice_detailsScalarFieldEnum[] | Invoice_detailsScalarFieldEnum
    having?: invoice_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Invoice_detailsCountAggregateInputType | true
    _avg?: Invoice_detailsAvgAggregateInputType
    _sum?: Invoice_detailsSumAggregateInputType
    _min?: Invoice_detailsMinAggregateInputType
    _max?: Invoice_detailsMaxAggregateInputType
  }

  export type Invoice_detailsGroupByOutputType = {
    id: bigint
    name: string
    amount: string
    created_at: Date
    updated_at: Date
    _count: Invoice_detailsCountAggregateOutputType | null
    _avg: Invoice_detailsAvgAggregateOutputType | null
    _sum: Invoice_detailsSumAggregateOutputType | null
    _min: Invoice_detailsMinAggregateOutputType | null
    _max: Invoice_detailsMaxAggregateOutputType | null
  }

  type GetInvoice_detailsGroupByPayload<T extends invoice_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Invoice_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Invoice_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Invoice_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Invoice_detailsGroupByOutputType[P]>
        }
      >
    >


  export type invoice_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    invoices?: boolean | invoice_details$invoicesArgs<ExtArgs>
    _count?: boolean | Invoice_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice_details"]>

  export type invoice_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["invoice_details"]>

  export type invoice_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["invoice_details"]>

  export type invoice_detailsSelectScalar = {
    id?: boolean
    name?: boolean
    amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type invoice_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amount" | "created_at" | "updated_at", ExtArgs["result"]["invoice_details"]>
  export type invoice_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | invoice_details$invoicesArgs<ExtArgs>
    _count?: boolean | Invoice_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoice_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type invoice_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $invoice_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoice_details"
    objects: {
      invoices: Prisma.$invoicesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      amount: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["invoice_details"]>
    composites: {}
  }

  type invoice_detailsGetPayload<S extends boolean | null | undefined | invoice_detailsDefaultArgs> = $Result.GetResult<Prisma.$invoice_detailsPayload, S>

  type invoice_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoice_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Invoice_detailsCountAggregateInputType | true
    }

  export interface invoice_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice_details'], meta: { name: 'invoice_details' } }
    /**
     * Find zero or one Invoice_details that matches the filter.
     * @param {invoice_detailsFindUniqueArgs} args - Arguments to find a Invoice_details
     * @example
     * // Get one Invoice_details
     * const invoice_details = await prisma.invoice_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoice_detailsFindUniqueArgs>(args: SelectSubset<T, invoice_detailsFindUniqueArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoice_detailsFindUniqueOrThrowArgs} args - Arguments to find a Invoice_details
     * @example
     * // Get one Invoice_details
     * const invoice_details = await prisma.invoice_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoice_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, invoice_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_detailsFindFirstArgs} args - Arguments to find a Invoice_details
     * @example
     * // Get one Invoice_details
     * const invoice_details = await prisma.invoice_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoice_detailsFindFirstArgs>(args?: SelectSubset<T, invoice_detailsFindFirstArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_detailsFindFirstOrThrowArgs} args - Arguments to find a Invoice_details
     * @example
     * // Get one Invoice_details
     * const invoice_details = await prisma.invoice_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoice_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, invoice_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoice_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoice_details
     * const invoice_details = await prisma.invoice_details.findMany()
     * 
     * // Get first 10 Invoice_details
     * const invoice_details = await prisma.invoice_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoice_detailsWithIdOnly = await prisma.invoice_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoice_detailsFindManyArgs>(args?: SelectSubset<T, invoice_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice_details.
     * @param {invoice_detailsCreateArgs} args - Arguments to create a Invoice_details.
     * @example
     * // Create one Invoice_details
     * const Invoice_details = await prisma.invoice_details.create({
     *   data: {
     *     // ... data to create a Invoice_details
     *   }
     * })
     * 
     */
    create<T extends invoice_detailsCreateArgs>(args: SelectSubset<T, invoice_detailsCreateArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoice_details.
     * @param {invoice_detailsCreateManyArgs} args - Arguments to create many Invoice_details.
     * @example
     * // Create many Invoice_details
     * const invoice_details = await prisma.invoice_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoice_detailsCreateManyArgs>(args?: SelectSubset<T, invoice_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoice_details and returns the data saved in the database.
     * @param {invoice_detailsCreateManyAndReturnArgs} args - Arguments to create many Invoice_details.
     * @example
     * // Create many Invoice_details
     * const invoice_details = await prisma.invoice_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoice_details and only return the `id`
     * const invoice_detailsWithIdOnly = await prisma.invoice_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoice_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, invoice_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice_details.
     * @param {invoice_detailsDeleteArgs} args - Arguments to delete one Invoice_details.
     * @example
     * // Delete one Invoice_details
     * const Invoice_details = await prisma.invoice_details.delete({
     *   where: {
     *     // ... filter to delete one Invoice_details
     *   }
     * })
     * 
     */
    delete<T extends invoice_detailsDeleteArgs>(args: SelectSubset<T, invoice_detailsDeleteArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice_details.
     * @param {invoice_detailsUpdateArgs} args - Arguments to update one Invoice_details.
     * @example
     * // Update one Invoice_details
     * const invoice_details = await prisma.invoice_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoice_detailsUpdateArgs>(args: SelectSubset<T, invoice_detailsUpdateArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoice_details.
     * @param {invoice_detailsDeleteManyArgs} args - Arguments to filter Invoice_details to delete.
     * @example
     * // Delete a few Invoice_details
     * const { count } = await prisma.invoice_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoice_detailsDeleteManyArgs>(args?: SelectSubset<T, invoice_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoice_details
     * const invoice_details = await prisma.invoice_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoice_detailsUpdateManyArgs>(args: SelectSubset<T, invoice_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoice_details and returns the data updated in the database.
     * @param {invoice_detailsUpdateManyAndReturnArgs} args - Arguments to update many Invoice_details.
     * @example
     * // Update many Invoice_details
     * const invoice_details = await prisma.invoice_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoice_details and only return the `id`
     * const invoice_detailsWithIdOnly = await prisma.invoice_details.updateManyAndReturn({
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
    updateManyAndReturn<T extends invoice_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, invoice_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice_details.
     * @param {invoice_detailsUpsertArgs} args - Arguments to update or create a Invoice_details.
     * @example
     * // Update or create a Invoice_details
     * const invoice_details = await prisma.invoice_details.upsert({
     *   create: {
     *     // ... data to create a Invoice_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice_details we want to update
     *   }
     * })
     */
    upsert<T extends invoice_detailsUpsertArgs>(args: SelectSubset<T, invoice_detailsUpsertArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoice_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_detailsCountArgs} args - Arguments to filter Invoice_details to count.
     * @example
     * // Count the number of Invoice_details
     * const count = await prisma.invoice_details.count({
     *   where: {
     *     // ... the filter for the Invoice_details we want to count
     *   }
     * })
    **/
    count<T extends invoice_detailsCountArgs>(
      args?: Subset<T, invoice_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Invoice_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Invoice_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Invoice_detailsAggregateArgs>(args: Subset<T, Invoice_detailsAggregateArgs>): Prisma.PrismaPromise<GetInvoice_detailsAggregateType<T>>

    /**
     * Group by Invoice_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoice_detailsGroupByArgs} args - Group by arguments.
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
      T extends invoice_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoice_detailsGroupByArgs['orderBy'] }
        : { orderBy?: invoice_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoice_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoice_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoice_details model
   */
  readonly fields: invoice_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoice_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    invoices<T extends invoice_details$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, invoice_details$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the invoice_details model
   */
  interface invoice_detailsFieldRefs {
    readonly id: FieldRef<"invoice_details", 'BigInt'>
    readonly name: FieldRef<"invoice_details", 'String'>
    readonly amount: FieldRef<"invoice_details", 'String'>
    readonly created_at: FieldRef<"invoice_details", 'DateTime'>
    readonly updated_at: FieldRef<"invoice_details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invoice_details findUnique
   */
  export type invoice_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_details to fetch.
     */
    where: invoice_detailsWhereUniqueInput
  }

  /**
   * invoice_details findUniqueOrThrow
   */
  export type invoice_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_details to fetch.
     */
    where: invoice_detailsWhereUniqueInput
  }

  /**
   * invoice_details findFirst
   */
  export type invoice_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_details to fetch.
     */
    where?: invoice_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_details to fetch.
     */
    orderBy?: invoice_detailsOrderByWithRelationInput | invoice_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_details.
     */
    cursor?: invoice_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_details.
     */
    distinct?: Invoice_detailsScalarFieldEnum | Invoice_detailsScalarFieldEnum[]
  }

  /**
   * invoice_details findFirstOrThrow
   */
  export type invoice_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_details to fetch.
     */
    where?: invoice_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_details to fetch.
     */
    orderBy?: invoice_detailsOrderByWithRelationInput | invoice_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoice_details.
     */
    cursor?: invoice_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoice_details.
     */
    distinct?: Invoice_detailsScalarFieldEnum | Invoice_detailsScalarFieldEnum[]
  }

  /**
   * invoice_details findMany
   */
  export type invoice_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * Filter, which invoice_details to fetch.
     */
    where?: invoice_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoice_details to fetch.
     */
    orderBy?: invoice_detailsOrderByWithRelationInput | invoice_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoice_details.
     */
    cursor?: invoice_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoice_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoice_details.
     */
    skip?: number
    distinct?: Invoice_detailsScalarFieldEnum | Invoice_detailsScalarFieldEnum[]
  }

  /**
   * invoice_details create
   */
  export type invoice_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a invoice_details.
     */
    data: XOR<invoice_detailsCreateInput, invoice_detailsUncheckedCreateInput>
  }

  /**
   * invoice_details createMany
   */
  export type invoice_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoice_details.
     */
    data: invoice_detailsCreateManyInput | invoice_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_details createManyAndReturn
   */
  export type invoice_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many invoice_details.
     */
    data: invoice_detailsCreateManyInput | invoice_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoice_details update
   */
  export type invoice_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a invoice_details.
     */
    data: XOR<invoice_detailsUpdateInput, invoice_detailsUncheckedUpdateInput>
    /**
     * Choose, which invoice_details to update.
     */
    where: invoice_detailsWhereUniqueInput
  }

  /**
   * invoice_details updateMany
   */
  export type invoice_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoice_details.
     */
    data: XOR<invoice_detailsUpdateManyMutationInput, invoice_detailsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_details to update
     */
    where?: invoice_detailsWhereInput
    /**
     * Limit how many invoice_details to update.
     */
    limit?: number
  }

  /**
   * invoice_details updateManyAndReturn
   */
  export type invoice_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * The data used to update invoice_details.
     */
    data: XOR<invoice_detailsUpdateManyMutationInput, invoice_detailsUncheckedUpdateManyInput>
    /**
     * Filter which invoice_details to update
     */
    where?: invoice_detailsWhereInput
    /**
     * Limit how many invoice_details to update.
     */
    limit?: number
  }

  /**
   * invoice_details upsert
   */
  export type invoice_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the invoice_details to update in case it exists.
     */
    where: invoice_detailsWhereUniqueInput
    /**
     * In case the invoice_details found by the `where` argument doesn't exist, create a new invoice_details with this data.
     */
    create: XOR<invoice_detailsCreateInput, invoice_detailsUncheckedCreateInput>
    /**
     * In case the invoice_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoice_detailsUpdateInput, invoice_detailsUncheckedUpdateInput>
  }

  /**
   * invoice_details delete
   */
  export type invoice_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
    /**
     * Filter which invoice_details to delete.
     */
    where: invoice_detailsWhereUniqueInput
  }

  /**
   * invoice_details deleteMany
   */
  export type invoice_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice_details to delete
     */
    where?: invoice_detailsWhereInput
    /**
     * Limit how many invoice_details to delete.
     */
    limit?: number
  }

  /**
   * invoice_details.invoices
   */
  export type invoice_details$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    cursor?: invoicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoice_details without action
   */
  export type invoice_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice_details
     */
    select?: invoice_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoice_details
     */
    omit?: invoice_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoice_detailsInclude<ExtArgs> | null
  }


  /**
   * Model invoices
   */

  export type AggregateInvoices = {
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  export type InvoicesAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
    mail_sent: number | null
    invoice_details_id: number | null
  }

  export type InvoicesSumAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    mail_sent: number | null
    invoice_details_id: bigint | null
  }

  export type InvoicesMinAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    invoice_no: string | null
    amount: string | null
    tax: string | null
    gst: string | null
    mail_sent: number | null
    issue_date: Date | null
    due_date: Date | null
    payment_status: string | null
    invoice_details_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoicesMaxAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    invoice_no: string | null
    amount: string | null
    tax: string | null
    gst: string | null
    mail_sent: number | null
    issue_date: Date | null
    due_date: Date | null
    payment_status: string | null
    invoice_details_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoicesCountAggregateOutputType = {
    id: number
    client_id: number
    invoice_no: number
    amount: number
    tax: number
    gst: number
    mail_sent: number
    issue_date: number
    due_date: number
    payment_status: number
    invoice_details_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvoicesAvgAggregateInputType = {
    id?: true
    client_id?: true
    mail_sent?: true
    invoice_details_id?: true
  }

  export type InvoicesSumAggregateInputType = {
    id?: true
    client_id?: true
    mail_sent?: true
    invoice_details_id?: true
  }

  export type InvoicesMinAggregateInputType = {
    id?: true
    client_id?: true
    invoice_no?: true
    amount?: true
    tax?: true
    gst?: true
    mail_sent?: true
    issue_date?: true
    due_date?: true
    payment_status?: true
    invoice_details_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoicesMaxAggregateInputType = {
    id?: true
    client_id?: true
    invoice_no?: true
    amount?: true
    tax?: true
    gst?: true
    mail_sent?: true
    issue_date?: true
    due_date?: true
    payment_status?: true
    invoice_details_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoicesCountAggregateInputType = {
    id?: true
    client_id?: true
    invoice_no?: true
    amount?: true
    tax?: true
    gst?: true
    mail_sent?: true
    issue_date?: true
    due_date?: true
    payment_status?: true
    invoice_details_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvoicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to aggregate.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned invoices
    **/
    _count?: true | InvoicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoicesMaxAggregateInputType
  }

  export type GetInvoicesAggregateType<T extends InvoicesAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoices[P]>
      : GetScalarType<T[P], AggregateInvoices[P]>
  }




  export type invoicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoicesWhereInput
    orderBy?: invoicesOrderByWithAggregationInput | invoicesOrderByWithAggregationInput[]
    by: InvoicesScalarFieldEnum[] | InvoicesScalarFieldEnum
    having?: invoicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoicesCountAggregateInputType | true
    _avg?: InvoicesAvgAggregateInputType
    _sum?: InvoicesSumAggregateInputType
    _min?: InvoicesMinAggregateInputType
    _max?: InvoicesMaxAggregateInputType
  }

  export type InvoicesGroupByOutputType = {
    id: bigint
    client_id: bigint
    invoice_no: string
    amount: string | null
    tax: string | null
    gst: string | null
    mail_sent: number | null
    issue_date: Date | null
    due_date: Date | null
    payment_status: string | null
    invoice_details_id: bigint
    created_at: Date
    updated_at: Date
    _count: InvoicesCountAggregateOutputType | null
    _avg: InvoicesAvgAggregateOutputType | null
    _sum: InvoicesSumAggregateOutputType | null
    _min: InvoicesMinAggregateOutputType | null
    _max: InvoicesMaxAggregateOutputType | null
  }

  type GetInvoicesGroupByPayload<T extends invoicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
            : GetScalarType<T[P], InvoicesGroupByOutputType[P]>
        }
      >
    >


  export type invoicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    invoice_no?: boolean
    amount?: boolean
    tax?: boolean
    gst?: boolean
    mail_sent?: boolean
    issue_date?: boolean
    due_date?: boolean
    payment_status?: boolean
    invoice_details_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice_detail?: boolean | invoice_detailsDefaultArgs<ExtArgs>
    transactions?: boolean | invoices$transactionsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    invoice_no?: boolean
    amount?: boolean
    tax?: boolean
    gst?: boolean
    mail_sent?: boolean
    issue_date?: boolean
    due_date?: boolean
    payment_status?: boolean
    invoice_details_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice_detail?: boolean | invoice_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    invoice_no?: boolean
    amount?: boolean
    tax?: boolean
    gst?: boolean
    mail_sent?: boolean
    issue_date?: boolean
    due_date?: boolean
    payment_status?: boolean
    invoice_details_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice_detail?: boolean | invoice_detailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoices"]>

  export type invoicesSelectScalar = {
    id?: boolean
    client_id?: boolean
    invoice_no?: boolean
    amount?: boolean
    tax?: boolean
    gst?: boolean
    mail_sent?: boolean
    issue_date?: boolean
    due_date?: boolean
    payment_status?: boolean
    invoice_details_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type invoicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "invoice_no" | "amount" | "tax" | "gst" | "mail_sent" | "issue_date" | "due_date" | "payment_status" | "invoice_details_id" | "created_at" | "updated_at", ExtArgs["result"]["invoices"]>
  export type invoicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice_detail?: boolean | invoice_detailsDefaultArgs<ExtArgs>
    transactions?: boolean | invoices$transactionsArgs<ExtArgs>
    _count?: boolean | InvoicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice_detail?: boolean | invoice_detailsDefaultArgs<ExtArgs>
  }
  export type invoicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice_detail?: boolean | invoice_detailsDefaultArgs<ExtArgs>
  }

  export type $invoicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "invoices"
    objects: {
      client: Prisma.$clientsPayload<ExtArgs>
      invoice_detail: Prisma.$invoice_detailsPayload<ExtArgs>
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      client_id: bigint
      invoice_no: string
      amount: string | null
      tax: string | null
      gst: string | null
      mail_sent: number | null
      issue_date: Date | null
      due_date: Date | null
      payment_status: string | null
      invoice_details_id: bigint
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["invoices"]>
    composites: {}
  }

  type invoicesGetPayload<S extends boolean | null | undefined | invoicesDefaultArgs> = $Result.GetResult<Prisma.$invoicesPayload, S>

  type invoicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<invoicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoicesCountAggregateInputType | true
    }

  export interface invoicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoices'], meta: { name: 'invoices' } }
    /**
     * Find zero or one Invoices that matches the filter.
     * @param {invoicesFindUniqueArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends invoicesFindUniqueArgs>(args: SelectSubset<T, invoicesFindUniqueArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoices that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {invoicesFindUniqueOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends invoicesFindUniqueOrThrowArgs>(args: SelectSubset<T, invoicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends invoicesFindFirstArgs>(args?: SelectSubset<T, invoicesFindFirstArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindFirstOrThrowArgs} args - Arguments to find a Invoices
     * @example
     * // Get one Invoices
     * const invoices = await prisma.invoices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends invoicesFindFirstOrThrowArgs>(args?: SelectSubset<T, invoicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoices.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoicesWithIdOnly = await prisma.invoices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends invoicesFindManyArgs>(args?: SelectSubset<T, invoicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoices.
     * @param {invoicesCreateArgs} args - Arguments to create a Invoices.
     * @example
     * // Create one Invoices
     * const Invoices = await prisma.invoices.create({
     *   data: {
     *     // ... data to create a Invoices
     *   }
     * })
     * 
     */
    create<T extends invoicesCreateArgs>(args: SelectSubset<T, invoicesCreateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {invoicesCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends invoicesCreateManyArgs>(args?: SelectSubset<T, invoicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {invoicesCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoices = await prisma.invoices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends invoicesCreateManyAndReturnArgs>(args?: SelectSubset<T, invoicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoices.
     * @param {invoicesDeleteArgs} args - Arguments to delete one Invoices.
     * @example
     * // Delete one Invoices
     * const Invoices = await prisma.invoices.delete({
     *   where: {
     *     // ... filter to delete one Invoices
     *   }
     * })
     * 
     */
    delete<T extends invoicesDeleteArgs>(args: SelectSubset<T, invoicesDeleteArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoices.
     * @param {invoicesUpdateArgs} args - Arguments to update one Invoices.
     * @example
     * // Update one Invoices
     * const invoices = await prisma.invoices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends invoicesUpdateArgs>(args: SelectSubset<T, invoicesUpdateArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {invoicesDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends invoicesDeleteManyArgs>(args?: SelectSubset<T, invoicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends invoicesUpdateManyArgs>(args: SelectSubset<T, invoicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {invoicesUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoices = await prisma.invoices.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoicesWithIdOnly = await prisma.invoices.updateManyAndReturn({
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
    updateManyAndReturn<T extends invoicesUpdateManyAndReturnArgs>(args: SelectSubset<T, invoicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoices.
     * @param {invoicesUpsertArgs} args - Arguments to update or create a Invoices.
     * @example
     * // Update or create a Invoices
     * const invoices = await prisma.invoices.upsert({
     *   create: {
     *     // ... data to create a Invoices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoices we want to update
     *   }
     * })
     */
    upsert<T extends invoicesUpsertArgs>(args: SelectSubset<T, invoicesUpsertArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoices.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends invoicesCountArgs>(
      args?: Subset<T, invoicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoicesAggregateArgs>(args: Subset<T, InvoicesAggregateArgs>): Prisma.PrismaPromise<GetInvoicesAggregateType<T>>

    /**
     * Group by Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoicesGroupByArgs} args - Group by arguments.
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
      T extends invoicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoicesGroupByArgs['orderBy'] }
        : { orderBy?: invoicesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, invoicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the invoices model
   */
  readonly fields: invoicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice_detail<T extends invoice_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoice_detailsDefaultArgs<ExtArgs>>): Prisma__invoice_detailsClient<$Result.GetResult<Prisma.$invoice_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends invoices$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, invoices$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the invoices model
   */
  interface invoicesFieldRefs {
    readonly id: FieldRef<"invoices", 'BigInt'>
    readonly client_id: FieldRef<"invoices", 'BigInt'>
    readonly invoice_no: FieldRef<"invoices", 'String'>
    readonly amount: FieldRef<"invoices", 'String'>
    readonly tax: FieldRef<"invoices", 'String'>
    readonly gst: FieldRef<"invoices", 'String'>
    readonly mail_sent: FieldRef<"invoices", 'Int'>
    readonly issue_date: FieldRef<"invoices", 'DateTime'>
    readonly due_date: FieldRef<"invoices", 'DateTime'>
    readonly payment_status: FieldRef<"invoices", 'String'>
    readonly invoice_details_id: FieldRef<"invoices", 'BigInt'>
    readonly created_at: FieldRef<"invoices", 'DateTime'>
    readonly updated_at: FieldRef<"invoices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * invoices findUnique
   */
  export type invoicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findUniqueOrThrow
   */
  export type invoicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices findFirst
   */
  export type invoicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findFirstOrThrow
   */
  export type invoicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices findMany
   */
  export type invoicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoicesOrderByWithRelationInput | invoicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing invoices.
     */
    cursor?: invoicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` invoices.
     */
    skip?: number
    distinct?: InvoicesScalarFieldEnum | InvoicesScalarFieldEnum[]
  }

  /**
   * invoices create
   */
  export type invoicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to create a invoices.
     */
    data: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
  }

  /**
   * invoices createMany
   */
  export type invoicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * invoices createManyAndReturn
   */
  export type invoicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to create many invoices.
     */
    data: invoicesCreateManyInput | invoicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices update
   */
  export type invoicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The data needed to update a invoices.
     */
    data: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
    /**
     * Choose, which invoices to update.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices updateMany
   */
  export type invoicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
  }

  /**
   * invoices updateManyAndReturn
   */
  export type invoicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * The data used to update invoices.
     */
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyInput>
    /**
     * Filter which invoices to update
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * invoices upsert
   */
  export type invoicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * The filter to search for the invoices to update in case it exists.
     */
    where: invoicesWhereUniqueInput
    /**
     * In case the invoices found by the `where` argument doesn't exist, create a new invoices with this data.
     */
    create: XOR<invoicesCreateInput, invoicesUncheckedCreateInput>
    /**
     * In case the invoices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoicesUpdateInput, invoicesUncheckedUpdateInput>
  }

  /**
   * invoices delete
   */
  export type invoicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
    /**
     * Filter which invoices to delete.
     */
    where: invoicesWhereUniqueInput
  }

  /**
   * invoices deleteMany
   */
  export type invoicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoicesWhereInput
    /**
     * Limit how many invoices to delete.
     */
    limit?: number
  }

  /**
   * invoices.transactions
   */
  export type invoices$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * invoices without action
   */
  export type invoicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoices
     */
    select?: invoicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the invoices
     */
    omit?: invoicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: invoicesInclude<ExtArgs> | null
  }


  /**
   * Model subscriptions
   */

  export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  export type SubscriptionsAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type SubscriptionsSumAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
  }

  export type SubscriptionsMinAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    title: string | null
    amount: string | null
    description: string | null
    sub_title: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionsMaxAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    title: string | null
    amount: string | null
    description: string | null
    sub_title: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionsCountAggregateOutputType = {
    id: number
    client_id: number
    title: number
    amount: number
    description: number
    sub_title: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubscriptionsAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type SubscriptionsSumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type SubscriptionsMinAggregateInputType = {
    id?: true
    client_id?: true
    title?: true
    amount?: true
    description?: true
    sub_title?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionsMaxAggregateInputType = {
    id?: true
    client_id?: true
    title?: true
    amount?: true
    description?: true
    sub_title?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionsCountAggregateInputType = {
    id?: true
    client_id?: true
    title?: true
    amount?: true
    description?: true
    sub_title?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to aggregate.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subscriptions
    **/
    _count?: true | SubscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptions[P]>
      : GetScalarType<T[P], AggregateSubscriptions[P]>
  }




  export type subscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subscriptionsWhereInput
    orderBy?: subscriptionsOrderByWithAggregationInput | subscriptionsOrderByWithAggregationInput[]
    by: SubscriptionsScalarFieldEnum[] | SubscriptionsScalarFieldEnum
    having?: subscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionsCountAggregateInputType | true
    _avg?: SubscriptionsAvgAggregateInputType
    _sum?: SubscriptionsSumAggregateInputType
    _min?: SubscriptionsMinAggregateInputType
    _max?: SubscriptionsMaxAggregateInputType
  }

  export type SubscriptionsGroupByOutputType = {
    id: bigint
    client_id: bigint
    title: string
    amount: string
    description: string | null
    sub_title: string | null
    created_at: Date
    updated_at: Date
    _count: SubscriptionsCountAggregateOutputType | null
    _avg: SubscriptionsAvgAggregateOutputType | null
    _sum: SubscriptionsSumAggregateOutputType | null
    _min: SubscriptionsMinAggregateOutputType | null
    _max: SubscriptionsMaxAggregateOutputType | null
  }

  type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type subscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    title?: boolean
    amount?: boolean
    description?: boolean
    sub_title?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    title?: boolean
    amount?: boolean
    description?: boolean
    sub_title?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    title?: boolean
    amount?: boolean
    description?: boolean
    sub_title?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptions"]>

  export type subscriptionsSelectScalar = {
    id?: boolean
    client_id?: boolean
    title?: boolean
    amount?: boolean
    description?: boolean
    sub_title?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type subscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "title" | "amount" | "description" | "sub_title" | "created_at" | "updated_at", ExtArgs["result"]["subscriptions"]>
  export type subscriptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
  }
  export type subscriptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
  }
  export type subscriptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
  }

  export type $subscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subscriptions"
    objects: {
      client: Prisma.$clientsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      client_id: bigint
      title: string
      amount: string
      description: string | null
      sub_title: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subscriptions"]>
    composites: {}
  }

  type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> = $Result.GetResult<Prisma.$subscriptionsPayload, S>

  type subscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionsCountAggregateInputType | true
    }

  export interface subscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'], meta: { name: 'subscriptions' } }
    /**
     * Find zero or one Subscriptions that matches the filter.
     * @param {subscriptionsFindUniqueArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subscriptionsFindUniqueArgs>(args: SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subscriptionsFindFirstArgs>(args?: SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindFirstOrThrowArgs} args - Arguments to find a Subscriptions
     * @example
     * // Get one Subscriptions
     * const subscriptions = await prisma.subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subscriptionsFindManyArgs>(args?: SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriptions.
     * @param {subscriptionsCreateArgs} args - Arguments to create a Subscriptions.
     * @example
     * // Create one Subscriptions
     * const Subscriptions = await prisma.subscriptions.create({
     *   data: {
     *     // ... data to create a Subscriptions
     *   }
     * })
     * 
     */
    create<T extends subscriptionsCreateArgs>(args: SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {subscriptionsCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subscriptionsCreateManyArgs>(args?: SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {subscriptionsCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscriptions = await prisma.subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscriptions.
     * @param {subscriptionsDeleteArgs} args - Arguments to delete one Subscriptions.
     * @example
     * // Delete one Subscriptions
     * const Subscriptions = await prisma.subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Subscriptions
     *   }
     * })
     * 
     */
    delete<T extends subscriptionsDeleteArgs>(args: SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriptions.
     * @param {subscriptionsUpdateArgs} args - Arguments to update one Subscriptions.
     * @example
     * // Update one Subscriptions
     * const subscriptions = await prisma.subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subscriptionsUpdateArgs>(args: SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {subscriptionsDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subscriptionsDeleteManyArgs>(args?: SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subscriptionsUpdateManyArgs>(args: SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {subscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscriptions = await prisma.subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionsWithIdOnly = await prisma.subscriptions.updateManyAndReturn({
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
    updateManyAndReturn<T extends subscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscriptions.
     * @param {subscriptionsUpsertArgs} args - Arguments to update or create a Subscriptions.
     * @example
     * // Update or create a Subscriptions
     * const subscriptions = await prisma.subscriptions.upsert({
     *   create: {
     *     // ... data to create a Subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends subscriptionsUpsertArgs>(args: SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>): Prisma__subscriptionsClient<$Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscriptions.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends subscriptionsCountArgs>(
      args?: Subset<T, subscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionsAggregateArgs>(args: Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>

    /**
     * Group by Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subscriptionsGroupByArgs} args - Group by arguments.
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
      T extends subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: subscriptionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subscriptions model
   */
  readonly fields: subscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subscriptions model
   */
  interface subscriptionsFieldRefs {
    readonly id: FieldRef<"subscriptions", 'BigInt'>
    readonly client_id: FieldRef<"subscriptions", 'BigInt'>
    readonly title: FieldRef<"subscriptions", 'String'>
    readonly amount: FieldRef<"subscriptions", 'String'>
    readonly description: FieldRef<"subscriptions", 'String'>
    readonly sub_title: FieldRef<"subscriptions", 'String'>
    readonly created_at: FieldRef<"subscriptions", 'DateTime'>
    readonly updated_at: FieldRef<"subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * subscriptions findUnique
   */
  export type subscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findUniqueOrThrow
   */
  export type subscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions findFirst
   */
  export type subscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findFirstOrThrow
   */
  export type subscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subscriptions.
     */
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions findMany
   */
  export type subscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter, which subscriptions to fetch.
     */
    where?: subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subscriptions to fetch.
     */
    orderBy?: subscriptionsOrderByWithRelationInput | subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subscriptions.
     */
    cursor?: subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subscriptions.
     */
    skip?: number
    distinct?: SubscriptionsScalarFieldEnum | SubscriptionsScalarFieldEnum[]
  }

  /**
   * subscriptions create
   */
  export type subscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a subscriptions.
     */
    data: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
  }

  /**
   * subscriptions createMany
   */
  export type subscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subscriptions createManyAndReturn
   */
  export type subscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many subscriptions.
     */
    data: subscriptionsCreateManyInput | subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscriptions update
   */
  export type subscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a subscriptions.
     */
    data: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
    /**
     * Choose, which subscriptions to update.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions updateMany
   */
  export type subscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
  }

  /**
   * subscriptions updateManyAndReturn
   */
  export type subscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update subscriptions.
     */
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which subscriptions to update
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subscriptions upsert
   */
  export type subscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the subscriptions to update in case it exists.
     */
    where: subscriptionsWhereUniqueInput
    /**
     * In case the subscriptions found by the `where` argument doesn't exist, create a new subscriptions with this data.
     */
    create: XOR<subscriptionsCreateInput, subscriptionsUncheckedCreateInput>
    /**
     * In case the subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subscriptionsUpdateInput, subscriptionsUncheckedUpdateInput>
  }

  /**
   * subscriptions delete
   */
  export type subscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
    /**
     * Filter which subscriptions to delete.
     */
    where: subscriptionsWhereUniqueInput
  }

  /**
   * subscriptions deleteMany
   */
  export type subscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subscriptions to delete
     */
    where?: subscriptionsWhereInput
    /**
     * Limit how many subscriptions to delete.
     */
    limit?: number
  }

  /**
   * subscriptions without action
   */
  export type subscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subscriptions
     */
    select?: subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subscriptions
     */
    omit?: subscriptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subscriptionsInclude<ExtArgs> | null
  }


  /**
   * Model payment_methods
   */

  export type AggregatePayment_methods = {
    _count: Payment_methodsCountAggregateOutputType | null
    _avg: Payment_methodsAvgAggregateOutputType | null
    _sum: Payment_methodsSumAggregateOutputType | null
    _min: Payment_methodsMinAggregateOutputType | null
    _max: Payment_methodsMaxAggregateOutputType | null
  }

  export type Payment_methodsAvgAggregateOutputType = {
    id: number | null
    publish: number | null
    sort: number | null
  }

  export type Payment_methodsSumAggregateOutputType = {
    id: bigint | null
    publish: number | null
    sort: bigint | null
  }

  export type Payment_methodsMinAggregateOutputType = {
    id: bigint | null
    payment_method_name: string | null
    display_name: string | null
    slug: string | null
    sandbox_key: string | null
    sandbox_secret: string | null
    live_key: string | null
    live_secret: string | null
    publish: number | null
    sort: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_methodsMaxAggregateOutputType = {
    id: bigint | null
    payment_method_name: string | null
    display_name: string | null
    slug: string | null
    sandbox_key: string | null
    sandbox_secret: string | null
    live_key: string | null
    live_secret: string | null
    publish: number | null
    sort: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Payment_methodsCountAggregateOutputType = {
    id: number
    payment_method_name: number
    display_name: number
    slug: number
    sandbox_key: number
    sandbox_secret: number
    live_key: number
    live_secret: number
    publish: number
    sort: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Payment_methodsAvgAggregateInputType = {
    id?: true
    publish?: true
    sort?: true
  }

  export type Payment_methodsSumAggregateInputType = {
    id?: true
    publish?: true
    sort?: true
  }

  export type Payment_methodsMinAggregateInputType = {
    id?: true
    payment_method_name?: true
    display_name?: true
    slug?: true
    sandbox_key?: true
    sandbox_secret?: true
    live_key?: true
    live_secret?: true
    publish?: true
    sort?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_methodsMaxAggregateInputType = {
    id?: true
    payment_method_name?: true
    display_name?: true
    slug?: true
    sandbox_key?: true
    sandbox_secret?: true
    live_key?: true
    live_secret?: true
    publish?: true
    sort?: true
    created_at?: true
    updated_at?: true
  }

  export type Payment_methodsCountAggregateInputType = {
    id?: true
    payment_method_name?: true
    display_name?: true
    slug?: true
    sandbox_key?: true
    sandbox_secret?: true
    live_key?: true
    live_secret?: true
    publish?: true
    sort?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Payment_methodsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_methods to aggregate.
     */
    where?: payment_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodsOrderByWithRelationInput | payment_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: payment_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned payment_methods
    **/
    _count?: true | Payment_methodsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Payment_methodsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Payment_methodsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Payment_methodsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Payment_methodsMaxAggregateInputType
  }

  export type GetPayment_methodsAggregateType<T extends Payment_methodsAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment_methods]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment_methods[P]>
      : GetScalarType<T[P], AggregatePayment_methods[P]>
  }




  export type payment_methodsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: payment_methodsWhereInput
    orderBy?: payment_methodsOrderByWithAggregationInput | payment_methodsOrderByWithAggregationInput[]
    by: Payment_methodsScalarFieldEnum[] | Payment_methodsScalarFieldEnum
    having?: payment_methodsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Payment_methodsCountAggregateInputType | true
    _avg?: Payment_methodsAvgAggregateInputType
    _sum?: Payment_methodsSumAggregateInputType
    _min?: Payment_methodsMinAggregateInputType
    _max?: Payment_methodsMaxAggregateInputType
  }

  export type Payment_methodsGroupByOutputType = {
    id: bigint
    payment_method_name: string
    display_name: string
    slug: string
    sandbox_key: string | null
    sandbox_secret: string | null
    live_key: string | null
    live_secret: string | null
    publish: number | null
    sort: bigint | null
    created_at: Date
    updated_at: Date
    _count: Payment_methodsCountAggregateOutputType | null
    _avg: Payment_methodsAvgAggregateOutputType | null
    _sum: Payment_methodsSumAggregateOutputType | null
    _min: Payment_methodsMinAggregateOutputType | null
    _max: Payment_methodsMaxAggregateOutputType | null
  }

  type GetPayment_methodsGroupByPayload<T extends payment_methodsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Payment_methodsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Payment_methodsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Payment_methodsGroupByOutputType[P]>
            : GetScalarType<T[P], Payment_methodsGroupByOutputType[P]>
        }
      >
    >


  export type payment_methodsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_method_name?: boolean
    display_name?: boolean
    slug?: boolean
    sandbox_key?: boolean
    sandbox_secret?: boolean
    live_key?: boolean
    live_secret?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
    transactions?: boolean | payment_methods$transactionsArgs<ExtArgs>
    _count?: boolean | Payment_methodsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment_methods"]>

  export type payment_methodsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_method_name?: boolean
    display_name?: boolean
    slug?: boolean
    sandbox_key?: boolean
    sandbox_secret?: boolean
    live_key?: boolean
    live_secret?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_methods"]>

  export type payment_methodsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payment_method_name?: boolean
    display_name?: boolean
    slug?: boolean
    sandbox_key?: boolean
    sandbox_secret?: boolean
    live_key?: boolean
    live_secret?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment_methods"]>

  export type payment_methodsSelectScalar = {
    id?: boolean
    payment_method_name?: boolean
    display_name?: boolean
    slug?: boolean
    sandbox_key?: boolean
    sandbox_secret?: boolean
    live_key?: boolean
    live_secret?: boolean
    publish?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type payment_methodsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payment_method_name" | "display_name" | "slug" | "sandbox_key" | "sandbox_secret" | "live_key" | "live_secret" | "publish" | "sort" | "created_at" | "updated_at", ExtArgs["result"]["payment_methods"]>
  export type payment_methodsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | payment_methods$transactionsArgs<ExtArgs>
    _count?: boolean | Payment_methodsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type payment_methodsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type payment_methodsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $payment_methodsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "payment_methods"
    objects: {
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      payment_method_name: string
      display_name: string
      slug: string
      sandbox_key: string | null
      sandbox_secret: string | null
      live_key: string | null
      live_secret: string | null
      publish: number | null
      sort: bigint | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment_methods"]>
    composites: {}
  }

  type payment_methodsGetPayload<S extends boolean | null | undefined | payment_methodsDefaultArgs> = $Result.GetResult<Prisma.$payment_methodsPayload, S>

  type payment_methodsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<payment_methodsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Payment_methodsCountAggregateInputType | true
    }

  export interface payment_methodsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['payment_methods'], meta: { name: 'payment_methods' } }
    /**
     * Find zero or one Payment_methods that matches the filter.
     * @param {payment_methodsFindUniqueArgs} args - Arguments to find a Payment_methods
     * @example
     * // Get one Payment_methods
     * const payment_methods = await prisma.payment_methods.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends payment_methodsFindUniqueArgs>(args: SelectSubset<T, payment_methodsFindUniqueArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment_methods that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {payment_methodsFindUniqueOrThrowArgs} args - Arguments to find a Payment_methods
     * @example
     * // Get one Payment_methods
     * const payment_methods = await prisma.payment_methods.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends payment_methodsFindUniqueOrThrowArgs>(args: SelectSubset<T, payment_methodsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodsFindFirstArgs} args - Arguments to find a Payment_methods
     * @example
     * // Get one Payment_methods
     * const payment_methods = await prisma.payment_methods.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends payment_methodsFindFirstArgs>(args?: SelectSubset<T, payment_methodsFindFirstArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment_methods that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodsFindFirstOrThrowArgs} args - Arguments to find a Payment_methods
     * @example
     * // Get one Payment_methods
     * const payment_methods = await prisma.payment_methods.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends payment_methodsFindFirstOrThrowArgs>(args?: SelectSubset<T, payment_methodsFindFirstOrThrowArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payment_methods
     * const payment_methods = await prisma.payment_methods.findMany()
     * 
     * // Get first 10 Payment_methods
     * const payment_methods = await prisma.payment_methods.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payment_methodsWithIdOnly = await prisma.payment_methods.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends payment_methodsFindManyArgs>(args?: SelectSubset<T, payment_methodsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment_methods.
     * @param {payment_methodsCreateArgs} args - Arguments to create a Payment_methods.
     * @example
     * // Create one Payment_methods
     * const Payment_methods = await prisma.payment_methods.create({
     *   data: {
     *     // ... data to create a Payment_methods
     *   }
     * })
     * 
     */
    create<T extends payment_methodsCreateArgs>(args: SelectSubset<T, payment_methodsCreateArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payment_methods.
     * @param {payment_methodsCreateManyArgs} args - Arguments to create many Payment_methods.
     * @example
     * // Create many Payment_methods
     * const payment_methods = await prisma.payment_methods.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends payment_methodsCreateManyArgs>(args?: SelectSubset<T, payment_methodsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payment_methods and returns the data saved in the database.
     * @param {payment_methodsCreateManyAndReturnArgs} args - Arguments to create many Payment_methods.
     * @example
     * // Create many Payment_methods
     * const payment_methods = await prisma.payment_methods.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payment_methods and only return the `id`
     * const payment_methodsWithIdOnly = await prisma.payment_methods.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends payment_methodsCreateManyAndReturnArgs>(args?: SelectSubset<T, payment_methodsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment_methods.
     * @param {payment_methodsDeleteArgs} args - Arguments to delete one Payment_methods.
     * @example
     * // Delete one Payment_methods
     * const Payment_methods = await prisma.payment_methods.delete({
     *   where: {
     *     // ... filter to delete one Payment_methods
     *   }
     * })
     * 
     */
    delete<T extends payment_methodsDeleteArgs>(args: SelectSubset<T, payment_methodsDeleteArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment_methods.
     * @param {payment_methodsUpdateArgs} args - Arguments to update one Payment_methods.
     * @example
     * // Update one Payment_methods
     * const payment_methods = await prisma.payment_methods.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends payment_methodsUpdateArgs>(args: SelectSubset<T, payment_methodsUpdateArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payment_methods.
     * @param {payment_methodsDeleteManyArgs} args - Arguments to filter Payment_methods to delete.
     * @example
     * // Delete a few Payment_methods
     * const { count } = await prisma.payment_methods.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends payment_methodsDeleteManyArgs>(args?: SelectSubset<T, payment_methodsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payment_methods
     * const payment_methods = await prisma.payment_methods.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends payment_methodsUpdateManyArgs>(args: SelectSubset<T, payment_methodsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payment_methods and returns the data updated in the database.
     * @param {payment_methodsUpdateManyAndReturnArgs} args - Arguments to update many Payment_methods.
     * @example
     * // Update many Payment_methods
     * const payment_methods = await prisma.payment_methods.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payment_methods and only return the `id`
     * const payment_methodsWithIdOnly = await prisma.payment_methods.updateManyAndReturn({
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
    updateManyAndReturn<T extends payment_methodsUpdateManyAndReturnArgs>(args: SelectSubset<T, payment_methodsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment_methods.
     * @param {payment_methodsUpsertArgs} args - Arguments to update or create a Payment_methods.
     * @example
     * // Update or create a Payment_methods
     * const payment_methods = await prisma.payment_methods.upsert({
     *   create: {
     *     // ... data to create a Payment_methods
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment_methods we want to update
     *   }
     * })
     */
    upsert<T extends payment_methodsUpsertArgs>(args: SelectSubset<T, payment_methodsUpsertArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodsCountArgs} args - Arguments to filter Payment_methods to count.
     * @example
     * // Count the number of Payment_methods
     * const count = await prisma.payment_methods.count({
     *   where: {
     *     // ... the filter for the Payment_methods we want to count
     *   }
     * })
    **/
    count<T extends payment_methodsCountArgs>(
      args?: Subset<T, payment_methodsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Payment_methodsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Payment_methodsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Payment_methodsAggregateArgs>(args: Subset<T, Payment_methodsAggregateArgs>): Prisma.PrismaPromise<GetPayment_methodsAggregateType<T>>

    /**
     * Group by Payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {payment_methodsGroupByArgs} args - Group by arguments.
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
      T extends payment_methodsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: payment_methodsGroupByArgs['orderBy'] }
        : { orderBy?: payment_methodsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, payment_methodsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayment_methodsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the payment_methods model
   */
  readonly fields: payment_methodsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for payment_methods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__payment_methodsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends payment_methods$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, payment_methods$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the payment_methods model
   */
  interface payment_methodsFieldRefs {
    readonly id: FieldRef<"payment_methods", 'BigInt'>
    readonly payment_method_name: FieldRef<"payment_methods", 'String'>
    readonly display_name: FieldRef<"payment_methods", 'String'>
    readonly slug: FieldRef<"payment_methods", 'String'>
    readonly sandbox_key: FieldRef<"payment_methods", 'String'>
    readonly sandbox_secret: FieldRef<"payment_methods", 'String'>
    readonly live_key: FieldRef<"payment_methods", 'String'>
    readonly live_secret: FieldRef<"payment_methods", 'String'>
    readonly publish: FieldRef<"payment_methods", 'Int'>
    readonly sort: FieldRef<"payment_methods", 'BigInt'>
    readonly created_at: FieldRef<"payment_methods", 'DateTime'>
    readonly updated_at: FieldRef<"payment_methods", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * payment_methods findUnique
   */
  export type payment_methodsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where: payment_methodsWhereUniqueInput
  }

  /**
   * payment_methods findUniqueOrThrow
   */
  export type payment_methodsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where: payment_methodsWhereUniqueInput
  }

  /**
   * payment_methods findFirst
   */
  export type payment_methodsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where?: payment_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodsOrderByWithRelationInput | payment_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodsScalarFieldEnum | Payment_methodsScalarFieldEnum[]
  }

  /**
   * payment_methods findFirstOrThrow
   */
  export type payment_methodsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where?: payment_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodsOrderByWithRelationInput | payment_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for payment_methods.
     */
    cursor?: payment_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of payment_methods.
     */
    distinct?: Payment_methodsScalarFieldEnum | Payment_methodsScalarFieldEnum[]
  }

  /**
   * payment_methods findMany
   */
  export type payment_methodsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * Filter, which payment_methods to fetch.
     */
    where?: payment_methodsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of payment_methods to fetch.
     */
    orderBy?: payment_methodsOrderByWithRelationInput | payment_methodsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing payment_methods.
     */
    cursor?: payment_methodsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` payment_methods.
     */
    skip?: number
    distinct?: Payment_methodsScalarFieldEnum | Payment_methodsScalarFieldEnum[]
  }

  /**
   * payment_methods create
   */
  export type payment_methodsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * The data needed to create a payment_methods.
     */
    data: XOR<payment_methodsCreateInput, payment_methodsUncheckedCreateInput>
  }

  /**
   * payment_methods createMany
   */
  export type payment_methodsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many payment_methods.
     */
    data: payment_methodsCreateManyInput | payment_methodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_methods createManyAndReturn
   */
  export type payment_methodsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * The data used to create many payment_methods.
     */
    data: payment_methodsCreateManyInput | payment_methodsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * payment_methods update
   */
  export type payment_methodsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * The data needed to update a payment_methods.
     */
    data: XOR<payment_methodsUpdateInput, payment_methodsUncheckedUpdateInput>
    /**
     * Choose, which payment_methods to update.
     */
    where: payment_methodsWhereUniqueInput
  }

  /**
   * payment_methods updateMany
   */
  export type payment_methodsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update payment_methods.
     */
    data: XOR<payment_methodsUpdateManyMutationInput, payment_methodsUncheckedUpdateManyInput>
    /**
     * Filter which payment_methods to update
     */
    where?: payment_methodsWhereInput
    /**
     * Limit how many payment_methods to update.
     */
    limit?: number
  }

  /**
   * payment_methods updateManyAndReturn
   */
  export type payment_methodsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * The data used to update payment_methods.
     */
    data: XOR<payment_methodsUpdateManyMutationInput, payment_methodsUncheckedUpdateManyInput>
    /**
     * Filter which payment_methods to update
     */
    where?: payment_methodsWhereInput
    /**
     * Limit how many payment_methods to update.
     */
    limit?: number
  }

  /**
   * payment_methods upsert
   */
  export type payment_methodsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * The filter to search for the payment_methods to update in case it exists.
     */
    where: payment_methodsWhereUniqueInput
    /**
     * In case the payment_methods found by the `where` argument doesn't exist, create a new payment_methods with this data.
     */
    create: XOR<payment_methodsCreateInput, payment_methodsUncheckedCreateInput>
    /**
     * In case the payment_methods was found with the provided `where` argument, update it with this data.
     */
    update: XOR<payment_methodsUpdateInput, payment_methodsUncheckedUpdateInput>
  }

  /**
   * payment_methods delete
   */
  export type payment_methodsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    /**
     * Filter which payment_methods to delete.
     */
    where: payment_methodsWhereUniqueInput
  }

  /**
   * payment_methods deleteMany
   */
  export type payment_methodsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which payment_methods to delete
     */
    where?: payment_methodsWhereInput
    /**
     * Limit how many payment_methods to delete.
     */
    limit?: number
  }

  /**
   * payment_methods.transactions
   */
  export type payment_methods$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * payment_methods without action
   */
  export type payment_methodsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
    invoice_id: number | null
    payment_method_id: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    invoice_id: bigint | null
    payment_method_id: bigint | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    invoice_id: bigint | null
    payment_method_id: bigint | null
    amout: string | null
    payment_status: string | null
    payment_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: bigint | null
    client_id: bigint | null
    invoice_id: bigint | null
    payment_method_id: bigint | null
    amout: string | null
    payment_status: string | null
    payment_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    client_id: number
    invoice_id: number
    payment_method_id: number
    amout: number
    payment_status: number
    payment_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    id?: true
    client_id?: true
    invoice_id?: true
    payment_method_id?: true
  }

  export type TransactionsSumAggregateInputType = {
    id?: true
    client_id?: true
    invoice_id?: true
    payment_method_id?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    client_id?: true
    invoice_id?: true
    payment_method_id?: true
    amout?: true
    payment_status?: true
    payment_date?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    client_id?: true
    invoice_id?: true
    payment_method_id?: true
    amout?: true
    payment_status?: true
    payment_date?: true
    created_at?: true
    updated_at?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    client_id?: true
    invoice_id?: true
    payment_method_id?: true
    amout?: true
    payment_status?: true
    payment_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: bigint
    client_id: bigint
    invoice_id: bigint
    payment_method_id: bigint | null
    amout: string | null
    payment_status: string | null
    payment_date: Date | null
    created_at: Date
    updated_at: Date
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    invoice_id?: boolean
    payment_method_id?: boolean
    amout?: boolean
    payment_status?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    payment_method?: boolean | transactions$payment_methodArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    invoice_id?: boolean
    payment_method_id?: boolean
    amout?: boolean
    payment_status?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    payment_method?: boolean | transactions$payment_methodArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    invoice_id?: boolean
    payment_method_id?: boolean
    amout?: boolean
    payment_status?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    payment_method?: boolean | transactions$payment_methodArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    id?: boolean
    client_id?: boolean
    invoice_id?: boolean
    payment_method_id?: boolean
    amout?: boolean
    payment_status?: boolean
    payment_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "invoice_id" | "payment_method_id" | "amout" | "payment_status" | "payment_date" | "created_at" | "updated_at", ExtArgs["result"]["transactions"]>
  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    payment_method?: boolean | transactions$payment_methodArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    payment_method?: boolean | transactions$payment_methodArgs<ExtArgs>
  }
  export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | clientsDefaultArgs<ExtArgs>
    invoice?: boolean | invoicesDefaultArgs<ExtArgs>
    payment_method?: boolean | transactions$payment_methodArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      client: Prisma.$clientsPayload<ExtArgs>
      invoice: Prisma.$invoicesPayload<ExtArgs>
      payment_method: Prisma.$payment_methodsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      client_id: bigint
      invoice_id: bigint
      payment_method_id: bigint | null
      amout: string | null
      payment_status: string | null
      payment_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends clientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, clientsDefaultArgs<ExtArgs>>): Prisma__clientsClient<$Result.GetResult<Prisma.$clientsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    invoice<T extends invoicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, invoicesDefaultArgs<ExtArgs>>): Prisma__invoicesClient<$Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment_method<T extends transactions$payment_methodArgs<ExtArgs> = {}>(args?: Subset<T, transactions$payment_methodArgs<ExtArgs>>): Prisma__payment_methodsClient<$Result.GetResult<Prisma.$payment_methodsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'BigInt'>
    readonly client_id: FieldRef<"transactions", 'BigInt'>
    readonly invoice_id: FieldRef<"transactions", 'BigInt'>
    readonly payment_method_id: FieldRef<"transactions", 'BigInt'>
    readonly amout: FieldRef<"transactions", 'String'>
    readonly payment_status: FieldRef<"transactions", 'String'>
    readonly payment_date: FieldRef<"transactions", 'DateTime'>
    readonly created_at: FieldRef<"transactions", 'DateTime'>
    readonly updated_at: FieldRef<"transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions updateManyAndReturn
   */
  export type transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions.payment_method
   */
  export type transactions$payment_methodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the payment_methods
     */
    select?: payment_methodsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the payment_methods
     */
    omit?: payment_methodsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: payment_methodsInclude<ExtArgs> | null
    where?: payment_methodsWhereInput
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Model settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    id: bigint | null
  }

  export type SettingsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    slug: string | null
    value: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    value: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    id?: true
  }

  export type SettingsSumAggregateInputType = {
    id?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    value?: true
    created_at?: true
    updated_at?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    value?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to aggregate.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: settingsWhereInput
    orderBy?: settingsOrderByWithAggregationInput | settingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: bigint
    name: string
    slug: string
    value: string | null
    created_at: Date
    updated_at: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["settings"]>

  export type settingsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    value?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "value" | "created_at" | "updated_at", ExtArgs["result"]["settings"]>

  export type $settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      slug: string
      value: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type settingsGetPayload<S extends boolean | null | undefined | settingsDefaultArgs> = $Result.GetResult<Prisma.$settingsPayload, S>

  type settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['settings'], meta: { name: 'settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {settingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends settingsFindUniqueArgs>(args: SelectSubset<T, settingsFindUniqueArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {settingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends settingsFindFirstArgs>(args?: SelectSubset<T, settingsFindFirstArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends settingsFindManyArgs>(args?: SelectSubset<T, settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {settingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends settingsCreateArgs>(args: SelectSubset<T, settingsCreateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {settingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends settingsCreateManyArgs>(args?: SelectSubset<T, settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {settingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {settingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends settingsDeleteArgs>(args: SelectSubset<T, settingsDeleteArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {settingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends settingsUpdateArgs>(args: SelectSubset<T, settingsUpdateArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {settingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends settingsDeleteManyArgs>(args?: SelectSubset<T, settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends settingsUpdateManyArgs>(args: SelectSubset<T, settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {settingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {settingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends settingsUpsertArgs>(args: SelectSubset<T, settingsUpsertArgs<ExtArgs>>): Prisma__settingsClient<$Result.GetResult<Prisma.$settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends settingsCountArgs>(
      args?: Subset<T, settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {settingsGroupByArgs} args - Group by arguments.
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
      T extends settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: settingsGroupByArgs['orderBy'] }
        : { orderBy?: settingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the settings model
   */
  readonly fields: settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the settings model
   */
  interface settingsFieldRefs {
    readonly id: FieldRef<"settings", 'BigInt'>
    readonly name: FieldRef<"settings", 'String'>
    readonly slug: FieldRef<"settings", 'String'>
    readonly value: FieldRef<"settings", 'String'>
    readonly created_at: FieldRef<"settings", 'DateTime'>
    readonly updated_at: FieldRef<"settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * settings findUnique
   */
  export type settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findUniqueOrThrow
   */
  export type settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings findFirst
   */
  export type settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findFirstOrThrow
   */
  export type settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings findMany
   */
  export type settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter, which settings to fetch.
     */
    where?: settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of settings to fetch.
     */
    orderBy?: settingsOrderByWithRelationInput | settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing settings.
     */
    cursor?: settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * settings create
   */
  export type settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to create a settings.
     */
    data: XOR<settingsCreateInput, settingsUncheckedCreateInput>
  }

  /**
   * settings createMany
   */
  export type settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings createManyAndReturn
   */
  export type settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to create many settings.
     */
    data: settingsCreateManyInput | settingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * settings update
   */
  export type settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data needed to update a settings.
     */
    data: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
    /**
     * Choose, which settings to update.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings updateMany
   */
  export type settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings updateManyAndReturn
   */
  export type settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The data used to update settings.
     */
    data: XOR<settingsUpdateManyMutationInput, settingsUncheckedUpdateManyInput>
    /**
     * Filter which settings to update
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to update.
     */
    limit?: number
  }

  /**
   * settings upsert
   */
  export type settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * The filter to search for the settings to update in case it exists.
     */
    where: settingsWhereUniqueInput
    /**
     * In case the settings found by the `where` argument doesn't exist, create a new settings with this data.
     */
    create: XOR<settingsCreateInput, settingsUncheckedCreateInput>
    /**
     * In case the settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<settingsUpdateInput, settingsUncheckedUpdateInput>
  }

  /**
   * settings delete
   */
  export type settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
    /**
     * Filter which settings to delete.
     */
    where: settingsWhereUniqueInput
  }

  /**
   * settings deleteMany
   */
  export type settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which settings to delete
     */
    where?: settingsWhereInput
    /**
     * Limit how many settings to delete.
     */
    limit?: number
  }

  /**
   * settings without action
   */
  export type settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the settings
     */
    select?: settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the settings
     */
    omit?: settingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CmsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    parent: 'parent',
    type: 'type',
    custom_url: 'custom_url',
    banner_image: 'banner_image',
    banner_image_alt_text: 'banner_image_alt_text',
    banner_title: 'banner_title',
    banner_tagline: 'banner_tagline',
    short_description: 'short_description',
    content: 'content',
    gallery: 'gallery',
    main_menu: 'main_menu',
    top_menu: 'top_menu',
    side_menu: 'side_menu',
    footer_menu: 'footer_menu',
    publish: 'publish',
    sort: 'sort',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CmsScalarFieldEnum = (typeof CmsScalarFieldEnum)[keyof typeof CmsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    password: 'password',
    address: 'address',
    profilePic: 'profilePic',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SeoScalarFieldEnum: {
    id: 'id',
    cms_id: 'cms_id',
    seo_title: 'seo_title',
    seo_keywords: 'seo_keywords',
    seo_description: 'seo_description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SeoScalarFieldEnum = (typeof SeoScalarFieldEnum)[keyof typeof SeoScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    client_name: 'client_name',
    email: 'email',
    mobile: 'mobile',
    company_name: 'company_name',
    password: 'password',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const Invoice_detailsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amount: 'amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Invoice_detailsScalarFieldEnum = (typeof Invoice_detailsScalarFieldEnum)[keyof typeof Invoice_detailsScalarFieldEnum]


  export const InvoicesScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    invoice_no: 'invoice_no',
    amount: 'amount',
    tax: 'tax',
    gst: 'gst',
    mail_sent: 'mail_sent',
    issue_date: 'issue_date',
    due_date: 'due_date',
    payment_status: 'payment_status',
    invoice_details_id: 'invoice_details_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum]


  export const SubscriptionsScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    title: 'title',
    amount: 'amount',
    description: 'description',
    sub_title: 'sub_title',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum]


  export const Payment_methodsScalarFieldEnum: {
    id: 'id',
    payment_method_name: 'payment_method_name',
    display_name: 'display_name',
    slug: 'slug',
    sandbox_key: 'sandbox_key',
    sandbox_secret: 'sandbox_secret',
    live_key: 'live_key',
    live_secret: 'live_secret',
    publish: 'publish',
    sort: 'sort',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Payment_methodsScalarFieldEnum = (typeof Payment_methodsScalarFieldEnum)[keyof typeof Payment_methodsScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    invoice_id: 'invoice_id',
    payment_method_id: 'payment_method_id',
    amout: 'amout',
    payment_status: 'payment_status',
    payment_date: 'payment_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    value: 'value',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type cmsWhereInput = {
    AND?: cmsWhereInput | cmsWhereInput[]
    OR?: cmsWhereInput[]
    NOT?: cmsWhereInput | cmsWhereInput[]
    id?: BigIntFilter<"cms"> | bigint | number
    slug?: StringFilter<"cms"> | string
    parent?: StringNullableFilter<"cms"> | string | null
    type?: StringNullableFilter<"cms"> | string | null
    custom_url?: StringNullableFilter<"cms"> | string | null
    banner_image?: StringNullableFilter<"cms"> | string | null
    banner_image_alt_text?: StringNullableFilter<"cms"> | string | null
    banner_title?: StringNullableFilter<"cms"> | string | null
    banner_tagline?: StringNullableFilter<"cms"> | string | null
    short_description?: StringNullableFilter<"cms"> | string | null
    content?: StringNullableFilter<"cms"> | string | null
    gallery?: StringNullableFilter<"cms"> | string | null
    main_menu?: IntNullableFilter<"cms"> | number | null
    top_menu?: IntNullableFilter<"cms"> | number | null
    side_menu?: IntNullableFilter<"cms"> | number | null
    footer_menu?: IntNullableFilter<"cms"> | number | null
    publish?: IntNullableFilter<"cms"> | number | null
    sort?: BigIntNullableFilter<"cms"> | bigint | number | null
    created_at?: DateTimeFilter<"cms"> | Date | string
    updated_at?: DateTimeFilter<"cms"> | Date | string
    seo?: SeoListRelationFilter
  }

  export type cmsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    parent?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    custom_url?: SortOrderInput | SortOrder
    banner_image?: SortOrderInput | SortOrder
    banner_image_alt_text?: SortOrderInput | SortOrder
    banner_title?: SortOrderInput | SortOrder
    banner_tagline?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    main_menu?: SortOrderInput | SortOrder
    top_menu?: SortOrderInput | SortOrder
    side_menu?: SortOrderInput | SortOrder
    footer_menu?: SortOrderInput | SortOrder
    publish?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    seo?: seoOrderByRelationAggregateInput
  }

  export type cmsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: cmsWhereInput | cmsWhereInput[]
    OR?: cmsWhereInput[]
    NOT?: cmsWhereInput | cmsWhereInput[]
    slug?: StringFilter<"cms"> | string
    parent?: StringNullableFilter<"cms"> | string | null
    type?: StringNullableFilter<"cms"> | string | null
    custom_url?: StringNullableFilter<"cms"> | string | null
    banner_image?: StringNullableFilter<"cms"> | string | null
    banner_image_alt_text?: StringNullableFilter<"cms"> | string | null
    banner_title?: StringNullableFilter<"cms"> | string | null
    banner_tagline?: StringNullableFilter<"cms"> | string | null
    short_description?: StringNullableFilter<"cms"> | string | null
    content?: StringNullableFilter<"cms"> | string | null
    gallery?: StringNullableFilter<"cms"> | string | null
    main_menu?: IntNullableFilter<"cms"> | number | null
    top_menu?: IntNullableFilter<"cms"> | number | null
    side_menu?: IntNullableFilter<"cms"> | number | null
    footer_menu?: IntNullableFilter<"cms"> | number | null
    publish?: IntNullableFilter<"cms"> | number | null
    sort?: BigIntNullableFilter<"cms"> | bigint | number | null
    created_at?: DateTimeFilter<"cms"> | Date | string
    updated_at?: DateTimeFilter<"cms"> | Date | string
    seo?: SeoListRelationFilter
  }, "id">

  export type cmsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    parent?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    custom_url?: SortOrderInput | SortOrder
    banner_image?: SortOrderInput | SortOrder
    banner_image_alt_text?: SortOrderInput | SortOrder
    banner_title?: SortOrderInput | SortOrder
    banner_tagline?: SortOrderInput | SortOrder
    short_description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    main_menu?: SortOrderInput | SortOrder
    top_menu?: SortOrderInput | SortOrder
    side_menu?: SortOrderInput | SortOrder
    footer_menu?: SortOrderInput | SortOrder
    publish?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: cmsCountOrderByAggregateInput
    _avg?: cmsAvgOrderByAggregateInput
    _max?: cmsMaxOrderByAggregateInput
    _min?: cmsMinOrderByAggregateInput
    _sum?: cmsSumOrderByAggregateInput
  }

  export type cmsScalarWhereWithAggregatesInput = {
    AND?: cmsScalarWhereWithAggregatesInput | cmsScalarWhereWithAggregatesInput[]
    OR?: cmsScalarWhereWithAggregatesInput[]
    NOT?: cmsScalarWhereWithAggregatesInput | cmsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"cms"> | bigint | number
    slug?: StringWithAggregatesFilter<"cms"> | string
    parent?: StringNullableWithAggregatesFilter<"cms"> | string | null
    type?: StringNullableWithAggregatesFilter<"cms"> | string | null
    custom_url?: StringNullableWithAggregatesFilter<"cms"> | string | null
    banner_image?: StringNullableWithAggregatesFilter<"cms"> | string | null
    banner_image_alt_text?: StringNullableWithAggregatesFilter<"cms"> | string | null
    banner_title?: StringNullableWithAggregatesFilter<"cms"> | string | null
    banner_tagline?: StringNullableWithAggregatesFilter<"cms"> | string | null
    short_description?: StringNullableWithAggregatesFilter<"cms"> | string | null
    content?: StringNullableWithAggregatesFilter<"cms"> | string | null
    gallery?: StringNullableWithAggregatesFilter<"cms"> | string | null
    main_menu?: IntNullableWithAggregatesFilter<"cms"> | number | null
    top_menu?: IntNullableWithAggregatesFilter<"cms"> | number | null
    side_menu?: IntNullableWithAggregatesFilter<"cms"> | number | null
    footer_menu?: IntNullableWithAggregatesFilter<"cms"> | number | null
    publish?: IntNullableWithAggregatesFilter<"cms"> | number | null
    sort?: BigIntNullableWithAggregatesFilter<"cms"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"cms"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"cms"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    name?: StringFilter<"users"> | string
    mobile?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    address?: StringNullableFilter<"users"> | string | null
    profilePic?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    mobile?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    address?: StringNullableFilter<"users"> | string | null
    profilePic?: StringNullableFilter<"users"> | string | null
    role?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    name?: StringWithAggregatesFilter<"users"> | string
    mobile?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    profilePic?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type seoWhereInput = {
    AND?: seoWhereInput | seoWhereInput[]
    OR?: seoWhereInput[]
    NOT?: seoWhereInput | seoWhereInput[]
    id?: BigIntFilter<"seo"> | bigint | number
    cms_id?: BigIntNullableFilter<"seo"> | bigint | number | null
    seo_title?: StringNullableFilter<"seo"> | string | null
    seo_keywords?: StringNullableFilter<"seo"> | string | null
    seo_description?: StringNullableFilter<"seo"> | string | null
    created_at?: DateTimeFilter<"seo"> | Date | string
    updated_at?: DateTimeFilter<"seo"> | Date | string
    cms?: XOR<CmsNullableScalarRelationFilter, cmsWhereInput> | null
  }

  export type seoOrderByWithRelationInput = {
    id?: SortOrder
    cms_id?: SortOrderInput | SortOrder
    seo_title?: SortOrderInput | SortOrder
    seo_keywords?: SortOrderInput | SortOrder
    seo_description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    cms?: cmsOrderByWithRelationInput
  }

  export type seoWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: seoWhereInput | seoWhereInput[]
    OR?: seoWhereInput[]
    NOT?: seoWhereInput | seoWhereInput[]
    cms_id?: BigIntNullableFilter<"seo"> | bigint | number | null
    seo_title?: StringNullableFilter<"seo"> | string | null
    seo_keywords?: StringNullableFilter<"seo"> | string | null
    seo_description?: StringNullableFilter<"seo"> | string | null
    created_at?: DateTimeFilter<"seo"> | Date | string
    updated_at?: DateTimeFilter<"seo"> | Date | string
    cms?: XOR<CmsNullableScalarRelationFilter, cmsWhereInput> | null
  }, "id">

  export type seoOrderByWithAggregationInput = {
    id?: SortOrder
    cms_id?: SortOrderInput | SortOrder
    seo_title?: SortOrderInput | SortOrder
    seo_keywords?: SortOrderInput | SortOrder
    seo_description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: seoCountOrderByAggregateInput
    _avg?: seoAvgOrderByAggregateInput
    _max?: seoMaxOrderByAggregateInput
    _min?: seoMinOrderByAggregateInput
    _sum?: seoSumOrderByAggregateInput
  }

  export type seoScalarWhereWithAggregatesInput = {
    AND?: seoScalarWhereWithAggregatesInput | seoScalarWhereWithAggregatesInput[]
    OR?: seoScalarWhereWithAggregatesInput[]
    NOT?: seoScalarWhereWithAggregatesInput | seoScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"seo"> | bigint | number
    cms_id?: BigIntNullableWithAggregatesFilter<"seo"> | bigint | number | null
    seo_title?: StringNullableWithAggregatesFilter<"seo"> | string | null
    seo_keywords?: StringNullableWithAggregatesFilter<"seo"> | string | null
    seo_description?: StringNullableWithAggregatesFilter<"seo"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"seo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"seo"> | Date | string
  }

  export type clientsWhereInput = {
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    id?: BigIntFilter<"clients"> | bigint | number
    client_name?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    mobile?: StringFilter<"clients"> | string
    company_name?: StringNullableFilter<"clients"> | string | null
    password?: StringFilter<"clients"> | string
    address?: StringNullableFilter<"clients"> | string | null
    created_at?: DateTimeFilter<"clients"> | Date | string
    updated_at?: DateTimeFilter<"clients"> | Date | string
    invoices?: InvoicesListRelationFilter
    transactions?: TransactionsListRelationFilter
    subscriptions?: SubscriptionsListRelationFilter
  }

  export type clientsOrderByWithRelationInput = {
    id?: SortOrder
    client_name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    company_name?: SortOrderInput | SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    invoices?: invoicesOrderByRelationAggregateInput
    transactions?: transactionsOrderByRelationAggregateInput
    subscriptions?: subscriptionsOrderByRelationAggregateInput
  }

  export type clientsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: clientsWhereInput | clientsWhereInput[]
    OR?: clientsWhereInput[]
    NOT?: clientsWhereInput | clientsWhereInput[]
    client_name?: StringFilter<"clients"> | string
    email?: StringFilter<"clients"> | string
    mobile?: StringFilter<"clients"> | string
    company_name?: StringNullableFilter<"clients"> | string | null
    password?: StringFilter<"clients"> | string
    address?: StringNullableFilter<"clients"> | string | null
    created_at?: DateTimeFilter<"clients"> | Date | string
    updated_at?: DateTimeFilter<"clients"> | Date | string
    invoices?: InvoicesListRelationFilter
    transactions?: TransactionsListRelationFilter
    subscriptions?: SubscriptionsListRelationFilter
  }, "id">

  export type clientsOrderByWithAggregationInput = {
    id?: SortOrder
    client_name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    company_name?: SortOrderInput | SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: clientsCountOrderByAggregateInput
    _avg?: clientsAvgOrderByAggregateInput
    _max?: clientsMaxOrderByAggregateInput
    _min?: clientsMinOrderByAggregateInput
    _sum?: clientsSumOrderByAggregateInput
  }

  export type clientsScalarWhereWithAggregatesInput = {
    AND?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    OR?: clientsScalarWhereWithAggregatesInput[]
    NOT?: clientsScalarWhereWithAggregatesInput | clientsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"clients"> | bigint | number
    client_name?: StringWithAggregatesFilter<"clients"> | string
    email?: StringWithAggregatesFilter<"clients"> | string
    mobile?: StringWithAggregatesFilter<"clients"> | string
    company_name?: StringNullableWithAggregatesFilter<"clients"> | string | null
    password?: StringWithAggregatesFilter<"clients"> | string
    address?: StringNullableWithAggregatesFilter<"clients"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"clients"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"clients"> | Date | string
  }

  export type invoice_detailsWhereInput = {
    AND?: invoice_detailsWhereInput | invoice_detailsWhereInput[]
    OR?: invoice_detailsWhereInput[]
    NOT?: invoice_detailsWhereInput | invoice_detailsWhereInput[]
    id?: BigIntFilter<"invoice_details"> | bigint | number
    name?: StringFilter<"invoice_details"> | string
    amount?: StringFilter<"invoice_details"> | string
    created_at?: DateTimeFilter<"invoice_details"> | Date | string
    updated_at?: DateTimeFilter<"invoice_details"> | Date | string
    invoices?: InvoicesListRelationFilter
  }

  export type invoice_detailsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    invoices?: invoicesOrderByRelationAggregateInput
  }

  export type invoice_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: invoice_detailsWhereInput | invoice_detailsWhereInput[]
    OR?: invoice_detailsWhereInput[]
    NOT?: invoice_detailsWhereInput | invoice_detailsWhereInput[]
    name?: StringFilter<"invoice_details"> | string
    amount?: StringFilter<"invoice_details"> | string
    created_at?: DateTimeFilter<"invoice_details"> | Date | string
    updated_at?: DateTimeFilter<"invoice_details"> | Date | string
    invoices?: InvoicesListRelationFilter
  }, "id">

  export type invoice_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: invoice_detailsCountOrderByAggregateInput
    _avg?: invoice_detailsAvgOrderByAggregateInput
    _max?: invoice_detailsMaxOrderByAggregateInput
    _min?: invoice_detailsMinOrderByAggregateInput
    _sum?: invoice_detailsSumOrderByAggregateInput
  }

  export type invoice_detailsScalarWhereWithAggregatesInput = {
    AND?: invoice_detailsScalarWhereWithAggregatesInput | invoice_detailsScalarWhereWithAggregatesInput[]
    OR?: invoice_detailsScalarWhereWithAggregatesInput[]
    NOT?: invoice_detailsScalarWhereWithAggregatesInput | invoice_detailsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"invoice_details"> | bigint | number
    name?: StringWithAggregatesFilter<"invoice_details"> | string
    amount?: StringWithAggregatesFilter<"invoice_details"> | string
    created_at?: DateTimeWithAggregatesFilter<"invoice_details"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"invoice_details"> | Date | string
  }

  export type invoicesWhereInput = {
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    id?: BigIntFilter<"invoices"> | bigint | number
    client_id?: BigIntFilter<"invoices"> | bigint | number
    invoice_no?: StringFilter<"invoices"> | string
    amount?: StringNullableFilter<"invoices"> | string | null
    tax?: StringNullableFilter<"invoices"> | string | null
    gst?: StringNullableFilter<"invoices"> | string | null
    mail_sent?: IntNullableFilter<"invoices"> | number | null
    issue_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    due_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    payment_status?: StringNullableFilter<"invoices"> | string | null
    invoice_details_id?: BigIntFilter<"invoices"> | bigint | number
    created_at?: DateTimeFilter<"invoices"> | Date | string
    updated_at?: DateTimeFilter<"invoices"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    invoice_detail?: XOR<Invoice_detailsScalarRelationFilter, invoice_detailsWhereInput>
    transactions?: TransactionsListRelationFilter
  }

  export type invoicesOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_no?: SortOrder
    amount?: SortOrderInput | SortOrder
    tax?: SortOrderInput | SortOrder
    gst?: SortOrderInput | SortOrder
    mail_sent?: SortOrderInput | SortOrder
    issue_date?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    invoice_details_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    client?: clientsOrderByWithRelationInput
    invoice_detail?: invoice_detailsOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type invoicesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: invoicesWhereInput | invoicesWhereInput[]
    OR?: invoicesWhereInput[]
    NOT?: invoicesWhereInput | invoicesWhereInput[]
    client_id?: BigIntFilter<"invoices"> | bigint | number
    invoice_no?: StringFilter<"invoices"> | string
    amount?: StringNullableFilter<"invoices"> | string | null
    tax?: StringNullableFilter<"invoices"> | string | null
    gst?: StringNullableFilter<"invoices"> | string | null
    mail_sent?: IntNullableFilter<"invoices"> | number | null
    issue_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    due_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    payment_status?: StringNullableFilter<"invoices"> | string | null
    invoice_details_id?: BigIntFilter<"invoices"> | bigint | number
    created_at?: DateTimeFilter<"invoices"> | Date | string
    updated_at?: DateTimeFilter<"invoices"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    invoice_detail?: XOR<Invoice_detailsScalarRelationFilter, invoice_detailsWhereInput>
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type invoicesOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_no?: SortOrder
    amount?: SortOrderInput | SortOrder
    tax?: SortOrderInput | SortOrder
    gst?: SortOrderInput | SortOrder
    mail_sent?: SortOrderInput | SortOrder
    issue_date?: SortOrderInput | SortOrder
    due_date?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    invoice_details_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: invoicesCountOrderByAggregateInput
    _avg?: invoicesAvgOrderByAggregateInput
    _max?: invoicesMaxOrderByAggregateInput
    _min?: invoicesMinOrderByAggregateInput
    _sum?: invoicesSumOrderByAggregateInput
  }

  export type invoicesScalarWhereWithAggregatesInput = {
    AND?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    OR?: invoicesScalarWhereWithAggregatesInput[]
    NOT?: invoicesScalarWhereWithAggregatesInput | invoicesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"invoices"> | bigint | number
    client_id?: BigIntWithAggregatesFilter<"invoices"> | bigint | number
    invoice_no?: StringWithAggregatesFilter<"invoices"> | string
    amount?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    tax?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    gst?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    mail_sent?: IntNullableWithAggregatesFilter<"invoices"> | number | null
    issue_date?: DateTimeNullableWithAggregatesFilter<"invoices"> | Date | string | null
    due_date?: DateTimeNullableWithAggregatesFilter<"invoices"> | Date | string | null
    payment_status?: StringNullableWithAggregatesFilter<"invoices"> | string | null
    invoice_details_id?: BigIntWithAggregatesFilter<"invoices"> | bigint | number
    created_at?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"invoices"> | Date | string
  }

  export type subscriptionsWhereInput = {
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    id?: BigIntFilter<"subscriptions"> | bigint | number
    client_id?: BigIntFilter<"subscriptions"> | bigint | number
    title?: StringFilter<"subscriptions"> | string
    amount?: StringFilter<"subscriptions"> | string
    description?: StringNullableFilter<"subscriptions"> | string | null
    sub_title?: StringNullableFilter<"subscriptions"> | string | null
    created_at?: DateTimeFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"subscriptions"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }

  export type subscriptionsOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    sub_title?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    client?: clientsOrderByWithRelationInput
  }

  export type subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: subscriptionsWhereInput | subscriptionsWhereInput[]
    OR?: subscriptionsWhereInput[]
    NOT?: subscriptionsWhereInput | subscriptionsWhereInput[]
    client_id?: BigIntFilter<"subscriptions"> | bigint | number
    title?: StringFilter<"subscriptions"> | string
    amount?: StringFilter<"subscriptions"> | string
    description?: StringNullableFilter<"subscriptions"> | string | null
    sub_title?: StringNullableFilter<"subscriptions"> | string | null
    created_at?: DateTimeFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"subscriptions"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
  }, "id">

  export type subscriptionsOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    sub_title?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: subscriptionsCountOrderByAggregateInput
    _avg?: subscriptionsAvgOrderByAggregateInput
    _max?: subscriptionsMaxOrderByAggregateInput
    _min?: subscriptionsMinOrderByAggregateInput
    _sum?: subscriptionsSumOrderByAggregateInput
  }

  export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?: subscriptionsScalarWhereWithAggregatesInput | subscriptionsScalarWhereWithAggregatesInput[]
    OR?: subscriptionsScalarWhereWithAggregatesInput[]
    NOT?: subscriptionsScalarWhereWithAggregatesInput | subscriptionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"subscriptions"> | bigint | number
    client_id?: BigIntWithAggregatesFilter<"subscriptions"> | bigint | number
    title?: StringWithAggregatesFilter<"subscriptions"> | string
    amount?: StringWithAggregatesFilter<"subscriptions"> | string
    description?: StringNullableWithAggregatesFilter<"subscriptions"> | string | null
    sub_title?: StringNullableWithAggregatesFilter<"subscriptions"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"subscriptions"> | Date | string
  }

  export type payment_methodsWhereInput = {
    AND?: payment_methodsWhereInput | payment_methodsWhereInput[]
    OR?: payment_methodsWhereInput[]
    NOT?: payment_methodsWhereInput | payment_methodsWhereInput[]
    id?: BigIntFilter<"payment_methods"> | bigint | number
    payment_method_name?: StringFilter<"payment_methods"> | string
    display_name?: StringFilter<"payment_methods"> | string
    slug?: StringFilter<"payment_methods"> | string
    sandbox_key?: StringNullableFilter<"payment_methods"> | string | null
    sandbox_secret?: StringNullableFilter<"payment_methods"> | string | null
    live_key?: StringNullableFilter<"payment_methods"> | string | null
    live_secret?: StringNullableFilter<"payment_methods"> | string | null
    publish?: IntNullableFilter<"payment_methods"> | number | null
    sort?: BigIntNullableFilter<"payment_methods"> | bigint | number | null
    created_at?: DateTimeFilter<"payment_methods"> | Date | string
    updated_at?: DateTimeFilter<"payment_methods"> | Date | string
    transactions?: TransactionsListRelationFilter
  }

  export type payment_methodsOrderByWithRelationInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    display_name?: SortOrder
    slug?: SortOrder
    sandbox_key?: SortOrderInput | SortOrder
    sandbox_secret?: SortOrderInput | SortOrder
    live_key?: SortOrderInput | SortOrder
    live_secret?: SortOrderInput | SortOrder
    publish?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type payment_methodsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: payment_methodsWhereInput | payment_methodsWhereInput[]
    OR?: payment_methodsWhereInput[]
    NOT?: payment_methodsWhereInput | payment_methodsWhereInput[]
    payment_method_name?: StringFilter<"payment_methods"> | string
    display_name?: StringFilter<"payment_methods"> | string
    slug?: StringFilter<"payment_methods"> | string
    sandbox_key?: StringNullableFilter<"payment_methods"> | string | null
    sandbox_secret?: StringNullableFilter<"payment_methods"> | string | null
    live_key?: StringNullableFilter<"payment_methods"> | string | null
    live_secret?: StringNullableFilter<"payment_methods"> | string | null
    publish?: IntNullableFilter<"payment_methods"> | number | null
    sort?: BigIntNullableFilter<"payment_methods"> | bigint | number | null
    created_at?: DateTimeFilter<"payment_methods"> | Date | string
    updated_at?: DateTimeFilter<"payment_methods"> | Date | string
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type payment_methodsOrderByWithAggregationInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    display_name?: SortOrder
    slug?: SortOrder
    sandbox_key?: SortOrderInput | SortOrder
    sandbox_secret?: SortOrderInput | SortOrder
    live_key?: SortOrderInput | SortOrder
    live_secret?: SortOrderInput | SortOrder
    publish?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: payment_methodsCountOrderByAggregateInput
    _avg?: payment_methodsAvgOrderByAggregateInput
    _max?: payment_methodsMaxOrderByAggregateInput
    _min?: payment_methodsMinOrderByAggregateInput
    _sum?: payment_methodsSumOrderByAggregateInput
  }

  export type payment_methodsScalarWhereWithAggregatesInput = {
    AND?: payment_methodsScalarWhereWithAggregatesInput | payment_methodsScalarWhereWithAggregatesInput[]
    OR?: payment_methodsScalarWhereWithAggregatesInput[]
    NOT?: payment_methodsScalarWhereWithAggregatesInput | payment_methodsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"payment_methods"> | bigint | number
    payment_method_name?: StringWithAggregatesFilter<"payment_methods"> | string
    display_name?: StringWithAggregatesFilter<"payment_methods"> | string
    slug?: StringWithAggregatesFilter<"payment_methods"> | string
    sandbox_key?: StringNullableWithAggregatesFilter<"payment_methods"> | string | null
    sandbox_secret?: StringNullableWithAggregatesFilter<"payment_methods"> | string | null
    live_key?: StringNullableWithAggregatesFilter<"payment_methods"> | string | null
    live_secret?: StringNullableWithAggregatesFilter<"payment_methods"> | string | null
    publish?: IntNullableWithAggregatesFilter<"payment_methods"> | number | null
    sort?: BigIntNullableWithAggregatesFilter<"payment_methods"> | bigint | number | null
    created_at?: DateTimeWithAggregatesFilter<"payment_methods"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"payment_methods"> | Date | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: BigIntFilter<"transactions"> | bigint | number
    client_id?: BigIntFilter<"transactions"> | bigint | number
    invoice_id?: BigIntFilter<"transactions"> | bigint | number
    payment_method_id?: BigIntNullableFilter<"transactions"> | bigint | number | null
    amout?: StringNullableFilter<"transactions"> | string | null
    payment_status?: StringNullableFilter<"transactions"> | string | null
    payment_date?: DateTimeNullableFilter<"transactions"> | Date | string | null
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    payment_method?: XOR<Payment_methodsNullableScalarRelationFilter, payment_methodsWhereInput> | null
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    amout?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    client?: clientsOrderByWithRelationInput
    invoice?: invoicesOrderByWithRelationInput
    payment_method?: payment_methodsOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    client_id?: BigIntFilter<"transactions"> | bigint | number
    invoice_id?: BigIntFilter<"transactions"> | bigint | number
    payment_method_id?: BigIntNullableFilter<"transactions"> | bigint | number | null
    amout?: StringNullableFilter<"transactions"> | string | null
    payment_status?: StringNullableFilter<"transactions"> | string | null
    payment_date?: DateTimeNullableFilter<"transactions"> | Date | string | null
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
    client?: XOR<ClientsScalarRelationFilter, clientsWhereInput>
    invoice?: XOR<InvoicesScalarRelationFilter, invoicesWhereInput>
    payment_method?: XOR<Payment_methodsNullableScalarRelationFilter, payment_methodsWhereInput> | null
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrderInput | SortOrder
    amout?: SortOrderInput | SortOrder
    payment_status?: SortOrderInput | SortOrder
    payment_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    client_id?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    invoice_id?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    payment_method_id?: BigIntNullableWithAggregatesFilter<"transactions"> | bigint | number | null
    amout?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    payment_status?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    payment_date?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
  }

  export type settingsWhereInput = {
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    id?: BigIntFilter<"settings"> | bigint | number
    name?: StringFilter<"settings"> | string
    slug?: StringFilter<"settings"> | string
    value?: StringNullableFilter<"settings"> | string | null
    created_at?: DateTimeFilter<"settings"> | Date | string
    updated_at?: DateTimeFilter<"settings"> | Date | string
  }

  export type settingsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: settingsWhereInput | settingsWhereInput[]
    OR?: settingsWhereInput[]
    NOT?: settingsWhereInput | settingsWhereInput[]
    name?: StringFilter<"settings"> | string
    slug?: StringFilter<"settings"> | string
    value?: StringNullableFilter<"settings"> | string | null
    created_at?: DateTimeFilter<"settings"> | Date | string
    updated_at?: DateTimeFilter<"settings"> | Date | string
  }, "id">

  export type settingsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: settingsCountOrderByAggregateInput
    _avg?: settingsAvgOrderByAggregateInput
    _max?: settingsMaxOrderByAggregateInput
    _min?: settingsMinOrderByAggregateInput
    _sum?: settingsSumOrderByAggregateInput
  }

  export type settingsScalarWhereWithAggregatesInput = {
    AND?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    OR?: settingsScalarWhereWithAggregatesInput[]
    NOT?: settingsScalarWhereWithAggregatesInput | settingsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"settings"> | bigint | number
    name?: StringWithAggregatesFilter<"settings"> | string
    slug?: StringWithAggregatesFilter<"settings"> | string
    value?: StringNullableWithAggregatesFilter<"settings"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"settings"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"settings"> | Date | string
  }

  export type cmsCreateInput = {
    id?: bigint | number
    slug: string
    parent?: string | null
    type?: string | null
    custom_url?: string | null
    banner_image?: string | null
    banner_image_alt_text?: string | null
    banner_title?: string | null
    banner_tagline?: string | null
    short_description?: string | null
    content?: string | null
    gallery?: string | null
    main_menu?: number | null
    top_menu?: number | null
    side_menu?: number | null
    footer_menu?: number | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    seo?: seoCreateNestedManyWithoutCmsInput
  }

  export type cmsUncheckedCreateInput = {
    id?: bigint | number
    slug: string
    parent?: string | null
    type?: string | null
    custom_url?: string | null
    banner_image?: string | null
    banner_image_alt_text?: string | null
    banner_title?: string | null
    banner_tagline?: string | null
    short_description?: string | null
    content?: string | null
    gallery?: string | null
    main_menu?: number | null
    top_menu?: number | null
    side_menu?: number | null
    footer_menu?: number | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    seo?: seoUncheckedCreateNestedManyWithoutCmsInput
  }

  export type cmsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image_alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    banner_title?: NullableStringFieldUpdateOperationsInput | string | null
    banner_tagline?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    main_menu?: NullableIntFieldUpdateOperationsInput | number | null
    top_menu?: NullableIntFieldUpdateOperationsInput | number | null
    side_menu?: NullableIntFieldUpdateOperationsInput | number | null
    footer_menu?: NullableIntFieldUpdateOperationsInput | number | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seo?: seoUpdateManyWithoutCmsNestedInput
  }

  export type cmsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image_alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    banner_title?: NullableStringFieldUpdateOperationsInput | string | null
    banner_tagline?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    main_menu?: NullableIntFieldUpdateOperationsInput | number | null
    top_menu?: NullableIntFieldUpdateOperationsInput | number | null
    side_menu?: NullableIntFieldUpdateOperationsInput | number | null
    footer_menu?: NullableIntFieldUpdateOperationsInput | number | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seo?: seoUncheckedUpdateManyWithoutCmsNestedInput
  }

  export type cmsCreateManyInput = {
    id?: bigint | number
    slug: string
    parent?: string | null
    type?: string | null
    custom_url?: string | null
    banner_image?: string | null
    banner_image_alt_text?: string | null
    banner_title?: string | null
    banner_tagline?: string | null
    short_description?: string | null
    content?: string | null
    gallery?: string | null
    main_menu?: number | null
    top_menu?: number | null
    side_menu?: number | null
    footer_menu?: number | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cmsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image_alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    banner_title?: NullableStringFieldUpdateOperationsInput | string | null
    banner_tagline?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    main_menu?: NullableIntFieldUpdateOperationsInput | number | null
    top_menu?: NullableIntFieldUpdateOperationsInput | number | null
    side_menu?: NullableIntFieldUpdateOperationsInput | number | null
    footer_menu?: NullableIntFieldUpdateOperationsInput | number | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cmsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image_alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    banner_title?: NullableStringFieldUpdateOperationsInput | string | null
    banner_tagline?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    main_menu?: NullableIntFieldUpdateOperationsInput | number | null
    top_menu?: NullableIntFieldUpdateOperationsInput | number | null
    side_menu?: NullableIntFieldUpdateOperationsInput | number | null
    footer_menu?: NullableIntFieldUpdateOperationsInput | number | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id?: bigint | number
    name: string
    mobile: string
    email: string
    password: string
    address?: string | null
    profilePic?: string | null
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    name: string
    mobile: string
    email: string
    password: string
    address?: string | null
    profilePic?: string | null
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    name: string
    mobile: string
    email: string
    password: string
    address?: string | null
    profilePic?: string | null
    role?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seoCreateInput = {
    id?: bigint | number
    seo_title?: string | null
    seo_keywords?: string | null
    seo_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cms?: cmsCreateNestedOneWithoutSeoInput
  }

  export type seoUncheckedCreateInput = {
    id?: bigint | number
    cms_id?: bigint | number | null
    seo_title?: string | null
    seo_keywords?: string | null
    seo_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type seoUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cms?: cmsUpdateOneWithoutSeoNestedInput
  }

  export type seoUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cms_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seoCreateManyInput = {
    id?: bigint | number
    cms_id?: bigint | number | null
    seo_title?: string | null
    seo_keywords?: string | null
    seo_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type seoUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seoUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    cms_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientsCreateInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesCreateNestedManyWithoutClientInput
    transactions?: transactionsCreateNestedManyWithoutClientInput
    subscriptions?: subscriptionsCreateNestedManyWithoutClientInput
  }

  export type clientsUncheckedCreateInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesUncheckedCreateNestedManyWithoutClientInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUpdateManyWithoutClientNestedInput
    transactions?: transactionsUpdateManyWithoutClientNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutClientNestedInput
  }

  export type clientsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUncheckedUpdateManyWithoutClientNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type clientsCreateManyInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type clientsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type clientsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoice_detailsCreateInput = {
    id?: bigint | number
    name: string
    amount: string
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesCreateNestedManyWithoutInvoice_detailInput
  }

  export type invoice_detailsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    amount: string
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesUncheckedCreateNestedManyWithoutInvoice_detailInput
  }

  export type invoice_detailsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUpdateManyWithoutInvoice_detailNestedInput
  }

  export type invoice_detailsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUncheckedUpdateManyWithoutInvoice_detailNestedInput
  }

  export type invoice_detailsCreateManyInput = {
    id?: bigint | number
    name: string
    amount: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoice_detailsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoice_detailsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateInput = {
    id?: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutInvoicesInput
    invoice_detail: invoice_detailsCreateNestedOneWithoutInvoicesInput
    transactions?: transactionsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    invoice_details_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
    invoice_detail?: invoice_detailsUpdateOneRequiredWithoutInvoicesNestedInput
    transactions?: transactionsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_details_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesCreateManyInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    invoice_details_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoicesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_details_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsCreateInput = {
    id?: bigint | number
    title: string
    amount: string
    description?: string | null
    sub_title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutSubscriptionsInput
  }

  export type subscriptionsUncheckedCreateInput = {
    id?: bigint | number
    client_id: bigint | number
    title: string
    amount: string
    description?: string | null
    sub_title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type subscriptionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsCreateManyInput = {
    id?: bigint | number
    client_id: bigint | number
    title: string
    amount: string
    description?: string | null
    sub_title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_methodsCreateInput = {
    id?: bigint | number
    payment_method_name: string
    display_name: string
    slug: string
    sandbox_key?: string | null
    sandbox_secret?: string | null
    live_key?: string | null
    live_secret?: string | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutPayment_methodInput
  }

  export type payment_methodsUncheckedCreateInput = {
    id?: bigint | number
    payment_method_name: string
    display_name: string
    slug: string
    sandbox_key?: string | null
    sandbox_secret?: string | null
    live_key?: string | null
    live_secret?: string | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutPayment_methodInput
  }

  export type payment_methodsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sandbox_key?: NullableStringFieldUpdateOperationsInput | string | null
    sandbox_secret?: NullableStringFieldUpdateOperationsInput | string | null
    live_key?: NullableStringFieldUpdateOperationsInput | string | null
    live_secret?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutPayment_methodNestedInput
  }

  export type payment_methodsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sandbox_key?: NullableStringFieldUpdateOperationsInput | string | null
    sandbox_secret?: NullableStringFieldUpdateOperationsInput | string | null
    live_key?: NullableStringFieldUpdateOperationsInput | string | null
    live_secret?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutPayment_methodNestedInput
  }

  export type payment_methodsCreateManyInput = {
    id?: bigint | number
    payment_method_name: string
    display_name: string
    slug: string
    sandbox_key?: string | null
    sandbox_secret?: string | null
    live_key?: string | null
    live_secret?: string | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_methodsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sandbox_key?: NullableStringFieldUpdateOperationsInput | string | null
    sandbox_secret?: NullableStringFieldUpdateOperationsInput | string | null
    live_key?: NullableStringFieldUpdateOperationsInput | string | null
    live_secret?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_methodsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sandbox_key?: NullableStringFieldUpdateOperationsInput | string | null
    sandbox_secret?: NullableStringFieldUpdateOperationsInput | string | null
    live_key?: NullableStringFieldUpdateOperationsInput | string | null
    live_secret?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateInput = {
    id?: bigint | number
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutTransactionsInput
    invoice: invoicesCreateNestedOneWithoutTransactionsInput
    payment_method?: payment_methodsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_id: bigint | number
    payment_method_id?: bigint | number | null
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutTransactionsNestedInput
    invoice?: invoicesUpdateOneRequiredWithoutTransactionsNestedInput
    payment_method?: payment_methodsUpdateOneWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_id: bigint | number
    payment_method_id?: bigint | number | null
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateInput = {
    id?: bigint | number
    name: string
    slug: string
    value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type settingsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    slug: string
    value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type settingsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsCreateManyInput = {
    id?: bigint | number
    name: string
    slug: string
    value?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type settingsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type settingsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SeoListRelationFilter = {
    every?: seoWhereInput
    some?: seoWhereInput
    none?: seoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type seoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cmsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    parent?: SortOrder
    type?: SortOrder
    custom_url?: SortOrder
    banner_image?: SortOrder
    banner_image_alt_text?: SortOrder
    banner_title?: SortOrder
    banner_tagline?: SortOrder
    short_description?: SortOrder
    content?: SortOrder
    gallery?: SortOrder
    main_menu?: SortOrder
    top_menu?: SortOrder
    side_menu?: SortOrder
    footer_menu?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cmsAvgOrderByAggregateInput = {
    id?: SortOrder
    main_menu?: SortOrder
    top_menu?: SortOrder
    side_menu?: SortOrder
    footer_menu?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
  }

  export type cmsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    parent?: SortOrder
    type?: SortOrder
    custom_url?: SortOrder
    banner_image?: SortOrder
    banner_image_alt_text?: SortOrder
    banner_title?: SortOrder
    banner_tagline?: SortOrder
    short_description?: SortOrder
    content?: SortOrder
    gallery?: SortOrder
    main_menu?: SortOrder
    top_menu?: SortOrder
    side_menu?: SortOrder
    footer_menu?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cmsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    parent?: SortOrder
    type?: SortOrder
    custom_url?: SortOrder
    banner_image?: SortOrder
    banner_image_alt_text?: SortOrder
    banner_title?: SortOrder
    banner_tagline?: SortOrder
    short_description?: SortOrder
    content?: SortOrder
    gallery?: SortOrder
    main_menu?: SortOrder
    top_menu?: SortOrder
    side_menu?: SortOrder
    footer_menu?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cmsSumOrderByAggregateInput = {
    id?: SortOrder
    main_menu?: SortOrder
    top_menu?: SortOrder
    side_menu?: SortOrder
    footer_menu?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    profilePic?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    profilePic?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    profilePic?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmsNullableScalarRelationFilter = {
    is?: cmsWhereInput | null
    isNot?: cmsWhereInput | null
  }

  export type seoCountOrderByAggregateInput = {
    id?: SortOrder
    cms_id?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type seoAvgOrderByAggregateInput = {
    id?: SortOrder
    cms_id?: SortOrder
  }

  export type seoMaxOrderByAggregateInput = {
    id?: SortOrder
    cms_id?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type seoMinOrderByAggregateInput = {
    id?: SortOrder
    cms_id?: SortOrder
    seo_title?: SortOrder
    seo_keywords?: SortOrder
    seo_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type seoSumOrderByAggregateInput = {
    id?: SortOrder
    cms_id?: SortOrder
  }

  export type InvoicesListRelationFilter = {
    every?: invoicesWhereInput
    some?: invoicesWhereInput
    none?: invoicesWhereInput
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type SubscriptionsListRelationFilter = {
    every?: subscriptionsWhereInput
    some?: subscriptionsWhereInput
    none?: subscriptionsWhereInput
  }

  export type invoicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subscriptionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type clientsCountOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    company_name?: SortOrder
    password?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type clientsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    company_name?: SortOrder
    password?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientsMinOrderByAggregateInput = {
    id?: SortOrder
    client_name?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    company_name?: SortOrder
    password?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type clientsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type invoice_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type invoice_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type invoice_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type invoice_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type invoice_detailsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientsScalarRelationFilter = {
    is?: clientsWhereInput
    isNot?: clientsWhereInput
  }

  export type Invoice_detailsScalarRelationFilter = {
    is?: invoice_detailsWhereInput
    isNot?: invoice_detailsWhereInput
  }

  export type invoicesCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_no?: SortOrder
    amount?: SortOrder
    tax?: SortOrder
    gst?: SortOrder
    mail_sent?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    payment_status?: SortOrder
    invoice_details_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type invoicesAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    mail_sent?: SortOrder
    invoice_details_id?: SortOrder
  }

  export type invoicesMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_no?: SortOrder
    amount?: SortOrder
    tax?: SortOrder
    gst?: SortOrder
    mail_sent?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    payment_status?: SortOrder
    invoice_details_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type invoicesMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_no?: SortOrder
    amount?: SortOrder
    tax?: SortOrder
    gst?: SortOrder
    mail_sent?: SortOrder
    issue_date?: SortOrder
    due_date?: SortOrder
    payment_status?: SortOrder
    invoice_details_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type invoicesSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    mail_sent?: SortOrder
    invoice_details_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type subscriptionsCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    sub_title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type subscriptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    sub_title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    sub_title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type subscriptionsSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type payment_methodsCountOrderByAggregateInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    display_name?: SortOrder
    slug?: SortOrder
    sandbox_key?: SortOrder
    sandbox_secret?: SortOrder
    live_key?: SortOrder
    live_secret?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_methodsAvgOrderByAggregateInput = {
    id?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
  }

  export type payment_methodsMaxOrderByAggregateInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    display_name?: SortOrder
    slug?: SortOrder
    sandbox_key?: SortOrder
    sandbox_secret?: SortOrder
    live_key?: SortOrder
    live_secret?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_methodsMinOrderByAggregateInput = {
    id?: SortOrder
    payment_method_name?: SortOrder
    display_name?: SortOrder
    slug?: SortOrder
    sandbox_key?: SortOrder
    sandbox_secret?: SortOrder
    live_key?: SortOrder
    live_secret?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type payment_methodsSumOrderByAggregateInput = {
    id?: SortOrder
    publish?: SortOrder
    sort?: SortOrder
  }

  export type InvoicesScalarRelationFilter = {
    is?: invoicesWhereInput
    isNot?: invoicesWhereInput
  }

  export type Payment_methodsNullableScalarRelationFilter = {
    is?: payment_methodsWhereInput | null
    isNot?: payment_methodsWhereInput | null
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrder
    amout?: SortOrder
    payment_status?: SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrder
    amout?: SortOrder
    payment_status?: SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrder
    amout?: SortOrder
    payment_status?: SortOrder
    payment_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    invoice_id?: SortOrder
    payment_method_id?: SortOrder
  }

  export type settingsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type settingsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type seoCreateNestedManyWithoutCmsInput = {
    create?: XOR<seoCreateWithoutCmsInput, seoUncheckedCreateWithoutCmsInput> | seoCreateWithoutCmsInput[] | seoUncheckedCreateWithoutCmsInput[]
    connectOrCreate?: seoCreateOrConnectWithoutCmsInput | seoCreateOrConnectWithoutCmsInput[]
    createMany?: seoCreateManyCmsInputEnvelope
    connect?: seoWhereUniqueInput | seoWhereUniqueInput[]
  }

  export type seoUncheckedCreateNestedManyWithoutCmsInput = {
    create?: XOR<seoCreateWithoutCmsInput, seoUncheckedCreateWithoutCmsInput> | seoCreateWithoutCmsInput[] | seoUncheckedCreateWithoutCmsInput[]
    connectOrCreate?: seoCreateOrConnectWithoutCmsInput | seoCreateOrConnectWithoutCmsInput[]
    createMany?: seoCreateManyCmsInputEnvelope
    connect?: seoWhereUniqueInput | seoWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type seoUpdateManyWithoutCmsNestedInput = {
    create?: XOR<seoCreateWithoutCmsInput, seoUncheckedCreateWithoutCmsInput> | seoCreateWithoutCmsInput[] | seoUncheckedCreateWithoutCmsInput[]
    connectOrCreate?: seoCreateOrConnectWithoutCmsInput | seoCreateOrConnectWithoutCmsInput[]
    upsert?: seoUpsertWithWhereUniqueWithoutCmsInput | seoUpsertWithWhereUniqueWithoutCmsInput[]
    createMany?: seoCreateManyCmsInputEnvelope
    set?: seoWhereUniqueInput | seoWhereUniqueInput[]
    disconnect?: seoWhereUniqueInput | seoWhereUniqueInput[]
    delete?: seoWhereUniqueInput | seoWhereUniqueInput[]
    connect?: seoWhereUniqueInput | seoWhereUniqueInput[]
    update?: seoUpdateWithWhereUniqueWithoutCmsInput | seoUpdateWithWhereUniqueWithoutCmsInput[]
    updateMany?: seoUpdateManyWithWhereWithoutCmsInput | seoUpdateManyWithWhereWithoutCmsInput[]
    deleteMany?: seoScalarWhereInput | seoScalarWhereInput[]
  }

  export type seoUncheckedUpdateManyWithoutCmsNestedInput = {
    create?: XOR<seoCreateWithoutCmsInput, seoUncheckedCreateWithoutCmsInput> | seoCreateWithoutCmsInput[] | seoUncheckedCreateWithoutCmsInput[]
    connectOrCreate?: seoCreateOrConnectWithoutCmsInput | seoCreateOrConnectWithoutCmsInput[]
    upsert?: seoUpsertWithWhereUniqueWithoutCmsInput | seoUpsertWithWhereUniqueWithoutCmsInput[]
    createMany?: seoCreateManyCmsInputEnvelope
    set?: seoWhereUniqueInput | seoWhereUniqueInput[]
    disconnect?: seoWhereUniqueInput | seoWhereUniqueInput[]
    delete?: seoWhereUniqueInput | seoWhereUniqueInput[]
    connect?: seoWhereUniqueInput | seoWhereUniqueInput[]
    update?: seoUpdateWithWhereUniqueWithoutCmsInput | seoUpdateWithWhereUniqueWithoutCmsInput[]
    updateMany?: seoUpdateManyWithWhereWithoutCmsInput | seoUpdateManyWithWhereWithoutCmsInput[]
    deleteMany?: seoScalarWhereInput | seoScalarWhereInput[]
  }

  export type cmsCreateNestedOneWithoutSeoInput = {
    create?: XOR<cmsCreateWithoutSeoInput, cmsUncheckedCreateWithoutSeoInput>
    connectOrCreate?: cmsCreateOrConnectWithoutSeoInput
    connect?: cmsWhereUniqueInput
  }

  export type cmsUpdateOneWithoutSeoNestedInput = {
    create?: XOR<cmsCreateWithoutSeoInput, cmsUncheckedCreateWithoutSeoInput>
    connectOrCreate?: cmsCreateOrConnectWithoutSeoInput
    upsert?: cmsUpsertWithoutSeoInput
    disconnect?: cmsWhereInput | boolean
    delete?: cmsWhereInput | boolean
    connect?: cmsWhereUniqueInput
    update?: XOR<XOR<cmsUpdateToOneWithWhereWithoutSeoInput, cmsUpdateWithoutSeoInput>, cmsUncheckedUpdateWithoutSeoInput>
  }

  export type invoicesCreateNestedManyWithoutClientInput = {
    create?: XOR<invoicesCreateWithoutClientInput, invoicesUncheckedCreateWithoutClientInput> | invoicesCreateWithoutClientInput[] | invoicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientInput | invoicesCreateOrConnectWithoutClientInput[]
    createMany?: invoicesCreateManyClientInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type transactionsCreateNestedManyWithoutClientInput = {
    create?: XOR<transactionsCreateWithoutClientInput, transactionsUncheckedCreateWithoutClientInput> | transactionsCreateWithoutClientInput[] | transactionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutClientInput | transactionsCreateOrConnectWithoutClientInput[]
    createMany?: transactionsCreateManyClientInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type subscriptionsCreateNestedManyWithoutClientInput = {
    create?: XOR<subscriptionsCreateWithoutClientInput, subscriptionsUncheckedCreateWithoutClientInput> | subscriptionsCreateWithoutClientInput[] | subscriptionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutClientInput | subscriptionsCreateOrConnectWithoutClientInput[]
    createMany?: subscriptionsCreateManyClientInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<invoicesCreateWithoutClientInput, invoicesUncheckedCreateWithoutClientInput> | invoicesCreateWithoutClientInput[] | invoicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientInput | invoicesCreateOrConnectWithoutClientInput[]
    createMany?: invoicesCreateManyClientInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<transactionsCreateWithoutClientInput, transactionsUncheckedCreateWithoutClientInput> | transactionsCreateWithoutClientInput[] | transactionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutClientInput | transactionsCreateOrConnectWithoutClientInput[]
    createMany?: transactionsCreateManyClientInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type subscriptionsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<subscriptionsCreateWithoutClientInput, subscriptionsUncheckedCreateWithoutClientInput> | subscriptionsCreateWithoutClientInput[] | subscriptionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutClientInput | subscriptionsCreateOrConnectWithoutClientInput[]
    createMany?: subscriptionsCreateManyClientInputEnvelope
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
  }

  export type invoicesUpdateManyWithoutClientNestedInput = {
    create?: XOR<invoicesCreateWithoutClientInput, invoicesUncheckedCreateWithoutClientInput> | invoicesCreateWithoutClientInput[] | invoicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientInput | invoicesCreateOrConnectWithoutClientInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutClientInput | invoicesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: invoicesCreateManyClientInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutClientInput | invoicesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutClientInput | invoicesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type transactionsUpdateManyWithoutClientNestedInput = {
    create?: XOR<transactionsCreateWithoutClientInput, transactionsUncheckedCreateWithoutClientInput> | transactionsCreateWithoutClientInput[] | transactionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutClientInput | transactionsCreateOrConnectWithoutClientInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutClientInput | transactionsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: transactionsCreateManyClientInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutClientInput | transactionsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutClientInput | transactionsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type subscriptionsUpdateManyWithoutClientNestedInput = {
    create?: XOR<subscriptionsCreateWithoutClientInput, subscriptionsUncheckedCreateWithoutClientInput> | subscriptionsCreateWithoutClientInput[] | subscriptionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutClientInput | subscriptionsCreateOrConnectWithoutClientInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutClientInput | subscriptionsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: subscriptionsCreateManyClientInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutClientInput | subscriptionsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutClientInput | subscriptionsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<invoicesCreateWithoutClientInput, invoicesUncheckedCreateWithoutClientInput> | invoicesCreateWithoutClientInput[] | invoicesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutClientInput | invoicesCreateOrConnectWithoutClientInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutClientInput | invoicesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: invoicesCreateManyClientInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutClientInput | invoicesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutClientInput | invoicesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<transactionsCreateWithoutClientInput, transactionsUncheckedCreateWithoutClientInput> | transactionsCreateWithoutClientInput[] | transactionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutClientInput | transactionsCreateOrConnectWithoutClientInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutClientInput | transactionsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: transactionsCreateManyClientInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutClientInput | transactionsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutClientInput | transactionsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type subscriptionsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<subscriptionsCreateWithoutClientInput, subscriptionsUncheckedCreateWithoutClientInput> | subscriptionsCreateWithoutClientInput[] | subscriptionsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: subscriptionsCreateOrConnectWithoutClientInput | subscriptionsCreateOrConnectWithoutClientInput[]
    upsert?: subscriptionsUpsertWithWhereUniqueWithoutClientInput | subscriptionsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: subscriptionsCreateManyClientInputEnvelope
    set?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    disconnect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    delete?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    connect?: subscriptionsWhereUniqueInput | subscriptionsWhereUniqueInput[]
    update?: subscriptionsUpdateWithWhereUniqueWithoutClientInput | subscriptionsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: subscriptionsUpdateManyWithWhereWithoutClientInput | subscriptionsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
  }

  export type invoicesCreateNestedManyWithoutInvoice_detailInput = {
    create?: XOR<invoicesCreateWithoutInvoice_detailInput, invoicesUncheckedCreateWithoutInvoice_detailInput> | invoicesCreateWithoutInvoice_detailInput[] | invoicesUncheckedCreateWithoutInvoice_detailInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_detailInput | invoicesCreateOrConnectWithoutInvoice_detailInput[]
    createMany?: invoicesCreateManyInvoice_detailInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type invoicesUncheckedCreateNestedManyWithoutInvoice_detailInput = {
    create?: XOR<invoicesCreateWithoutInvoice_detailInput, invoicesUncheckedCreateWithoutInvoice_detailInput> | invoicesCreateWithoutInvoice_detailInput[] | invoicesUncheckedCreateWithoutInvoice_detailInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_detailInput | invoicesCreateOrConnectWithoutInvoice_detailInput[]
    createMany?: invoicesCreateManyInvoice_detailInputEnvelope
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
  }

  export type invoicesUpdateManyWithoutInvoice_detailNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_detailInput, invoicesUncheckedCreateWithoutInvoice_detailInput> | invoicesCreateWithoutInvoice_detailInput[] | invoicesUncheckedCreateWithoutInvoice_detailInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_detailInput | invoicesCreateOrConnectWithoutInvoice_detailInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutInvoice_detailInput | invoicesUpsertWithWhereUniqueWithoutInvoice_detailInput[]
    createMany?: invoicesCreateManyInvoice_detailInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutInvoice_detailInput | invoicesUpdateWithWhereUniqueWithoutInvoice_detailInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutInvoice_detailInput | invoicesUpdateManyWithWhereWithoutInvoice_detailInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type invoicesUncheckedUpdateManyWithoutInvoice_detailNestedInput = {
    create?: XOR<invoicesCreateWithoutInvoice_detailInput, invoicesUncheckedCreateWithoutInvoice_detailInput> | invoicesCreateWithoutInvoice_detailInput[] | invoicesUncheckedCreateWithoutInvoice_detailInput[]
    connectOrCreate?: invoicesCreateOrConnectWithoutInvoice_detailInput | invoicesCreateOrConnectWithoutInvoice_detailInput[]
    upsert?: invoicesUpsertWithWhereUniqueWithoutInvoice_detailInput | invoicesUpsertWithWhereUniqueWithoutInvoice_detailInput[]
    createMany?: invoicesCreateManyInvoice_detailInputEnvelope
    set?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    disconnect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    delete?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    connect?: invoicesWhereUniqueInput | invoicesWhereUniqueInput[]
    update?: invoicesUpdateWithWhereUniqueWithoutInvoice_detailInput | invoicesUpdateWithWhereUniqueWithoutInvoice_detailInput[]
    updateMany?: invoicesUpdateManyWithWhereWithoutInvoice_detailInput | invoicesUpdateManyWithWhereWithoutInvoice_detailInput[]
    deleteMany?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
  }

  export type clientsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: clientsCreateOrConnectWithoutInvoicesInput
    connect?: clientsWhereUniqueInput
  }

  export type invoice_detailsCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<invoice_detailsCreateWithoutInvoicesInput, invoice_detailsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: invoice_detailsCreateOrConnectWithoutInvoicesInput
    connect?: invoice_detailsWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<transactionsCreateWithoutInvoiceInput, transactionsUncheckedCreateWithoutInvoiceInput> | transactionsCreateWithoutInvoiceInput[] | transactionsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutInvoiceInput | transactionsCreateOrConnectWithoutInvoiceInput[]
    createMany?: transactionsCreateManyInvoiceInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutInvoiceInput = {
    create?: XOR<transactionsCreateWithoutInvoiceInput, transactionsUncheckedCreateWithoutInvoiceInput> | transactionsCreateWithoutInvoiceInput[] | transactionsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutInvoiceInput | transactionsCreateOrConnectWithoutInvoiceInput[]
    createMany?: transactionsCreateManyInvoiceInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type clientsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: clientsCreateOrConnectWithoutInvoicesInput
    upsert?: clientsUpsertWithoutInvoicesInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutInvoicesInput, clientsUpdateWithoutInvoicesInput>, clientsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_detailsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<invoice_detailsCreateWithoutInvoicesInput, invoice_detailsUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: invoice_detailsCreateOrConnectWithoutInvoicesInput
    upsert?: invoice_detailsUpsertWithoutInvoicesInput
    connect?: invoice_detailsWhereUniqueInput
    update?: XOR<XOR<invoice_detailsUpdateToOneWithWhereWithoutInvoicesInput, invoice_detailsUpdateWithoutInvoicesInput>, invoice_detailsUncheckedUpdateWithoutInvoicesInput>
  }

  export type transactionsUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<transactionsCreateWithoutInvoiceInput, transactionsUncheckedCreateWithoutInvoiceInput> | transactionsCreateWithoutInvoiceInput[] | transactionsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutInvoiceInput | transactionsCreateOrConnectWithoutInvoiceInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutInvoiceInput | transactionsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: transactionsCreateManyInvoiceInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutInvoiceInput | transactionsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutInvoiceInput | transactionsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutInvoiceNestedInput = {
    create?: XOR<transactionsCreateWithoutInvoiceInput, transactionsUncheckedCreateWithoutInvoiceInput> | transactionsCreateWithoutInvoiceInput[] | transactionsUncheckedCreateWithoutInvoiceInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutInvoiceInput | transactionsCreateOrConnectWithoutInvoiceInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutInvoiceInput | transactionsUpsertWithWhereUniqueWithoutInvoiceInput[]
    createMany?: transactionsCreateManyInvoiceInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutInvoiceInput | transactionsUpdateWithWhereUniqueWithoutInvoiceInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutInvoiceInput | transactionsUpdateManyWithWhereWithoutInvoiceInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type clientsCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<clientsCreateWithoutSubscriptionsInput, clientsUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutSubscriptionsInput
    connect?: clientsWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<clientsCreateWithoutSubscriptionsInput, clientsUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutSubscriptionsInput
    upsert?: clientsUpsertWithoutSubscriptionsInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutSubscriptionsInput, clientsUpdateWithoutSubscriptionsInput>, clientsUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type transactionsCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<transactionsCreateWithoutPayment_methodInput, transactionsUncheckedCreateWithoutPayment_methodInput> | transactionsCreateWithoutPayment_methodInput[] | transactionsUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayment_methodInput | transactionsCreateOrConnectWithoutPayment_methodInput[]
    createMany?: transactionsCreateManyPayment_methodInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUncheckedCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<transactionsCreateWithoutPayment_methodInput, transactionsUncheckedCreateWithoutPayment_methodInput> | transactionsCreateWithoutPayment_methodInput[] | transactionsUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayment_methodInput | transactionsCreateOrConnectWithoutPayment_methodInput[]
    createMany?: transactionsCreateManyPayment_methodInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type transactionsUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<transactionsCreateWithoutPayment_methodInput, transactionsUncheckedCreateWithoutPayment_methodInput> | transactionsCreateWithoutPayment_methodInput[] | transactionsUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayment_methodInput | transactionsCreateOrConnectWithoutPayment_methodInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutPayment_methodInput | transactionsUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: transactionsCreateManyPayment_methodInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutPayment_methodInput | transactionsUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutPayment_methodInput | transactionsUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type transactionsUncheckedUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<transactionsCreateWithoutPayment_methodInput, transactionsUncheckedCreateWithoutPayment_methodInput> | transactionsCreateWithoutPayment_methodInput[] | transactionsUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutPayment_methodInput | transactionsCreateOrConnectWithoutPayment_methodInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutPayment_methodInput | transactionsUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: transactionsCreateManyPayment_methodInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutPayment_methodInput | transactionsUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutPayment_methodInput | transactionsUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type clientsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<clientsCreateWithoutTransactionsInput, clientsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutTransactionsInput
    connect?: clientsWhereUniqueInput
  }

  export type invoicesCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<invoicesCreateWithoutTransactionsInput, invoicesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutTransactionsInput
    connect?: invoicesWhereUniqueInput
  }

  export type payment_methodsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<payment_methodsCreateWithoutTransactionsInput, payment_methodsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: payment_methodsCreateOrConnectWithoutTransactionsInput
    connect?: payment_methodsWhereUniqueInput
  }

  export type clientsUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<clientsCreateWithoutTransactionsInput, clientsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: clientsCreateOrConnectWithoutTransactionsInput
    upsert?: clientsUpsertWithoutTransactionsInput
    connect?: clientsWhereUniqueInput
    update?: XOR<XOR<clientsUpdateToOneWithWhereWithoutTransactionsInput, clientsUpdateWithoutTransactionsInput>, clientsUncheckedUpdateWithoutTransactionsInput>
  }

  export type invoicesUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<invoicesCreateWithoutTransactionsInput, invoicesUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: invoicesCreateOrConnectWithoutTransactionsInput
    upsert?: invoicesUpsertWithoutTransactionsInput
    connect?: invoicesWhereUniqueInput
    update?: XOR<XOR<invoicesUpdateToOneWithWhereWithoutTransactionsInput, invoicesUpdateWithoutTransactionsInput>, invoicesUncheckedUpdateWithoutTransactionsInput>
  }

  export type payment_methodsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<payment_methodsCreateWithoutTransactionsInput, payment_methodsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: payment_methodsCreateOrConnectWithoutTransactionsInput
    upsert?: payment_methodsUpsertWithoutTransactionsInput
    disconnect?: payment_methodsWhereInput | boolean
    delete?: payment_methodsWhereInput | boolean
    connect?: payment_methodsWhereUniqueInput
    update?: XOR<XOR<payment_methodsUpdateToOneWithWhereWithoutTransactionsInput, payment_methodsUpdateWithoutTransactionsInput>, payment_methodsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type seoCreateWithoutCmsInput = {
    id?: bigint | number
    seo_title?: string | null
    seo_keywords?: string | null
    seo_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type seoUncheckedCreateWithoutCmsInput = {
    id?: bigint | number
    seo_title?: string | null
    seo_keywords?: string | null
    seo_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type seoCreateOrConnectWithoutCmsInput = {
    where: seoWhereUniqueInput
    create: XOR<seoCreateWithoutCmsInput, seoUncheckedCreateWithoutCmsInput>
  }

  export type seoCreateManyCmsInputEnvelope = {
    data: seoCreateManyCmsInput | seoCreateManyCmsInput[]
    skipDuplicates?: boolean
  }

  export type seoUpsertWithWhereUniqueWithoutCmsInput = {
    where: seoWhereUniqueInput
    update: XOR<seoUpdateWithoutCmsInput, seoUncheckedUpdateWithoutCmsInput>
    create: XOR<seoCreateWithoutCmsInput, seoUncheckedCreateWithoutCmsInput>
  }

  export type seoUpdateWithWhereUniqueWithoutCmsInput = {
    where: seoWhereUniqueInput
    data: XOR<seoUpdateWithoutCmsInput, seoUncheckedUpdateWithoutCmsInput>
  }

  export type seoUpdateManyWithWhereWithoutCmsInput = {
    where: seoScalarWhereInput
    data: XOR<seoUpdateManyMutationInput, seoUncheckedUpdateManyWithoutCmsInput>
  }

  export type seoScalarWhereInput = {
    AND?: seoScalarWhereInput | seoScalarWhereInput[]
    OR?: seoScalarWhereInput[]
    NOT?: seoScalarWhereInput | seoScalarWhereInput[]
    id?: BigIntFilter<"seo"> | bigint | number
    cms_id?: BigIntNullableFilter<"seo"> | bigint | number | null
    seo_title?: StringNullableFilter<"seo"> | string | null
    seo_keywords?: StringNullableFilter<"seo"> | string | null
    seo_description?: StringNullableFilter<"seo"> | string | null
    created_at?: DateTimeFilter<"seo"> | Date | string
    updated_at?: DateTimeFilter<"seo"> | Date | string
  }

  export type cmsCreateWithoutSeoInput = {
    id?: bigint | number
    slug: string
    parent?: string | null
    type?: string | null
    custom_url?: string | null
    banner_image?: string | null
    banner_image_alt_text?: string | null
    banner_title?: string | null
    banner_tagline?: string | null
    short_description?: string | null
    content?: string | null
    gallery?: string | null
    main_menu?: number | null
    top_menu?: number | null
    side_menu?: number | null
    footer_menu?: number | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cmsUncheckedCreateWithoutSeoInput = {
    id?: bigint | number
    slug: string
    parent?: string | null
    type?: string | null
    custom_url?: string | null
    banner_image?: string | null
    banner_image_alt_text?: string | null
    banner_title?: string | null
    banner_tagline?: string | null
    short_description?: string | null
    content?: string | null
    gallery?: string | null
    main_menu?: number | null
    top_menu?: number | null
    side_menu?: number | null
    footer_menu?: number | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type cmsCreateOrConnectWithoutSeoInput = {
    where: cmsWhereUniqueInput
    create: XOR<cmsCreateWithoutSeoInput, cmsUncheckedCreateWithoutSeoInput>
  }

  export type cmsUpsertWithoutSeoInput = {
    update: XOR<cmsUpdateWithoutSeoInput, cmsUncheckedUpdateWithoutSeoInput>
    create: XOR<cmsCreateWithoutSeoInput, cmsUncheckedCreateWithoutSeoInput>
    where?: cmsWhereInput
  }

  export type cmsUpdateToOneWithWhereWithoutSeoInput = {
    where?: cmsWhereInput
    data: XOR<cmsUpdateWithoutSeoInput, cmsUncheckedUpdateWithoutSeoInput>
  }

  export type cmsUpdateWithoutSeoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image_alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    banner_title?: NullableStringFieldUpdateOperationsInput | string | null
    banner_tagline?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    main_menu?: NullableIntFieldUpdateOperationsInput | number | null
    top_menu?: NullableIntFieldUpdateOperationsInput | number | null
    side_menu?: NullableIntFieldUpdateOperationsInput | number | null
    footer_menu?: NullableIntFieldUpdateOperationsInput | number | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cmsUncheckedUpdateWithoutSeoInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    slug?: StringFieldUpdateOperationsInput | string
    parent?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    custom_url?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image?: NullableStringFieldUpdateOperationsInput | string | null
    banner_image_alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    banner_title?: NullableStringFieldUpdateOperationsInput | string | null
    banner_tagline?: NullableStringFieldUpdateOperationsInput | string | null
    short_description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableStringFieldUpdateOperationsInput | string | null
    main_menu?: NullableIntFieldUpdateOperationsInput | number | null
    top_menu?: NullableIntFieldUpdateOperationsInput | number | null
    side_menu?: NullableIntFieldUpdateOperationsInput | number | null
    footer_menu?: NullableIntFieldUpdateOperationsInput | number | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateWithoutClientInput = {
    id?: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoice_detail: invoice_detailsCreateNestedOneWithoutInvoicesInput
    transactions?: transactionsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateWithoutClientInput = {
    id?: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    invoice_details_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesCreateOrConnectWithoutClientInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutClientInput, invoicesUncheckedCreateWithoutClientInput>
  }

  export type invoicesCreateManyClientInputEnvelope = {
    data: invoicesCreateManyClientInput | invoicesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type transactionsCreateWithoutClientInput = {
    id?: bigint | number
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoice: invoicesCreateNestedOneWithoutTransactionsInput
    payment_method?: payment_methodsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutClientInput = {
    id?: bigint | number
    invoice_id: bigint | number
    payment_method_id?: bigint | number | null
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateOrConnectWithoutClientInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutClientInput, transactionsUncheckedCreateWithoutClientInput>
  }

  export type transactionsCreateManyClientInputEnvelope = {
    data: transactionsCreateManyClientInput | transactionsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type subscriptionsCreateWithoutClientInput = {
    id?: bigint | number
    title: string
    amount: string
    description?: string | null
    sub_title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsUncheckedCreateWithoutClientInput = {
    id?: bigint | number
    title: string
    amount: string
    description?: string | null
    sub_title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsCreateOrConnectWithoutClientInput = {
    where: subscriptionsWhereUniqueInput
    create: XOR<subscriptionsCreateWithoutClientInput, subscriptionsUncheckedCreateWithoutClientInput>
  }

  export type subscriptionsCreateManyClientInputEnvelope = {
    data: subscriptionsCreateManyClientInput | subscriptionsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type invoicesUpsertWithWhereUniqueWithoutClientInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutClientInput, invoicesUncheckedUpdateWithoutClientInput>
    create: XOR<invoicesCreateWithoutClientInput, invoicesUncheckedCreateWithoutClientInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutClientInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutClientInput, invoicesUncheckedUpdateWithoutClientInput>
  }

  export type invoicesUpdateManyWithWhereWithoutClientInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutClientInput>
  }

  export type invoicesScalarWhereInput = {
    AND?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    OR?: invoicesScalarWhereInput[]
    NOT?: invoicesScalarWhereInput | invoicesScalarWhereInput[]
    id?: BigIntFilter<"invoices"> | bigint | number
    client_id?: BigIntFilter<"invoices"> | bigint | number
    invoice_no?: StringFilter<"invoices"> | string
    amount?: StringNullableFilter<"invoices"> | string | null
    tax?: StringNullableFilter<"invoices"> | string | null
    gst?: StringNullableFilter<"invoices"> | string | null
    mail_sent?: IntNullableFilter<"invoices"> | number | null
    issue_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    due_date?: DateTimeNullableFilter<"invoices"> | Date | string | null
    payment_status?: StringNullableFilter<"invoices"> | string | null
    invoice_details_id?: BigIntFilter<"invoices"> | bigint | number
    created_at?: DateTimeFilter<"invoices"> | Date | string
    updated_at?: DateTimeFilter<"invoices"> | Date | string
  }

  export type transactionsUpsertWithWhereUniqueWithoutClientInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutClientInput, transactionsUncheckedUpdateWithoutClientInput>
    create: XOR<transactionsCreateWithoutClientInput, transactionsUncheckedCreateWithoutClientInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutClientInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutClientInput, transactionsUncheckedUpdateWithoutClientInput>
  }

  export type transactionsUpdateManyWithWhereWithoutClientInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutClientInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    id?: BigIntFilter<"transactions"> | bigint | number
    client_id?: BigIntFilter<"transactions"> | bigint | number
    invoice_id?: BigIntFilter<"transactions"> | bigint | number
    payment_method_id?: BigIntNullableFilter<"transactions"> | bigint | number | null
    amout?: StringNullableFilter<"transactions"> | string | null
    payment_status?: StringNullableFilter<"transactions"> | string | null
    payment_date?: DateTimeNullableFilter<"transactions"> | Date | string | null
    created_at?: DateTimeFilter<"transactions"> | Date | string
    updated_at?: DateTimeFilter<"transactions"> | Date | string
  }

  export type subscriptionsUpsertWithWhereUniqueWithoutClientInput = {
    where: subscriptionsWhereUniqueInput
    update: XOR<subscriptionsUpdateWithoutClientInput, subscriptionsUncheckedUpdateWithoutClientInput>
    create: XOR<subscriptionsCreateWithoutClientInput, subscriptionsUncheckedCreateWithoutClientInput>
  }

  export type subscriptionsUpdateWithWhereUniqueWithoutClientInput = {
    where: subscriptionsWhereUniqueInput
    data: XOR<subscriptionsUpdateWithoutClientInput, subscriptionsUncheckedUpdateWithoutClientInput>
  }

  export type subscriptionsUpdateManyWithWhereWithoutClientInput = {
    where: subscriptionsScalarWhereInput
    data: XOR<subscriptionsUpdateManyMutationInput, subscriptionsUncheckedUpdateManyWithoutClientInput>
  }

  export type subscriptionsScalarWhereInput = {
    AND?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
    OR?: subscriptionsScalarWhereInput[]
    NOT?: subscriptionsScalarWhereInput | subscriptionsScalarWhereInput[]
    id?: BigIntFilter<"subscriptions"> | bigint | number
    client_id?: BigIntFilter<"subscriptions"> | bigint | number
    title?: StringFilter<"subscriptions"> | string
    amount?: StringFilter<"subscriptions"> | string
    description?: StringNullableFilter<"subscriptions"> | string | null
    sub_title?: StringNullableFilter<"subscriptions"> | string | null
    created_at?: DateTimeFilter<"subscriptions"> | Date | string
    updated_at?: DateTimeFilter<"subscriptions"> | Date | string
  }

  export type invoicesCreateWithoutInvoice_detailInput = {
    id?: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutInvoicesInput
    transactions?: transactionsCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesUncheckedCreateWithoutInvoice_detailInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutInvoiceInput
  }

  export type invoicesCreateOrConnectWithoutInvoice_detailInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutInvoice_detailInput, invoicesUncheckedCreateWithoutInvoice_detailInput>
  }

  export type invoicesCreateManyInvoice_detailInputEnvelope = {
    data: invoicesCreateManyInvoice_detailInput | invoicesCreateManyInvoice_detailInput[]
    skipDuplicates?: boolean
  }

  export type invoicesUpsertWithWhereUniqueWithoutInvoice_detailInput = {
    where: invoicesWhereUniqueInput
    update: XOR<invoicesUpdateWithoutInvoice_detailInput, invoicesUncheckedUpdateWithoutInvoice_detailInput>
    create: XOR<invoicesCreateWithoutInvoice_detailInput, invoicesUncheckedCreateWithoutInvoice_detailInput>
  }

  export type invoicesUpdateWithWhereUniqueWithoutInvoice_detailInput = {
    where: invoicesWhereUniqueInput
    data: XOR<invoicesUpdateWithoutInvoice_detailInput, invoicesUncheckedUpdateWithoutInvoice_detailInput>
  }

  export type invoicesUpdateManyWithWhereWithoutInvoice_detailInput = {
    where: invoicesScalarWhereInput
    data: XOR<invoicesUpdateManyMutationInput, invoicesUncheckedUpdateManyWithoutInvoice_detailInput>
  }

  export type clientsCreateWithoutInvoicesInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsCreateNestedManyWithoutClientInput
    subscriptions?: subscriptionsCreateNestedManyWithoutClientInput
  }

  export type clientsUncheckedCreateWithoutInvoicesInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    transactions?: transactionsUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientsCreateOrConnectWithoutInvoicesInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
  }

  export type invoice_detailsCreateWithoutInvoicesInput = {
    id?: bigint | number
    name: string
    amount: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoice_detailsUncheckedCreateWithoutInvoicesInput = {
    id?: bigint | number
    name: string
    amount: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoice_detailsCreateOrConnectWithoutInvoicesInput = {
    where: invoice_detailsWhereUniqueInput
    create: XOR<invoice_detailsCreateWithoutInvoicesInput, invoice_detailsUncheckedCreateWithoutInvoicesInput>
  }

  export type transactionsCreateWithoutInvoiceInput = {
    id?: bigint | number
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutTransactionsInput
    payment_method?: payment_methodsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutInvoiceInput = {
    id?: bigint | number
    client_id: bigint | number
    payment_method_id?: bigint | number | null
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateOrConnectWithoutInvoiceInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutInvoiceInput, transactionsUncheckedCreateWithoutInvoiceInput>
  }

  export type transactionsCreateManyInvoiceInputEnvelope = {
    data: transactionsCreateManyInvoiceInput | transactionsCreateManyInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type clientsUpsertWithoutInvoicesInput = {
    update: XOR<clientsUpdateWithoutInvoicesInput, clientsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<clientsCreateWithoutInvoicesInput, clientsUncheckedCreateWithoutInvoicesInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutInvoicesInput, clientsUncheckedUpdateWithoutInvoicesInput>
  }

  export type clientsUpdateWithoutInvoicesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUpdateManyWithoutClientNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutClientNestedInput
  }

  export type clientsUncheckedUpdateWithoutInvoicesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type invoice_detailsUpsertWithoutInvoicesInput = {
    update: XOR<invoice_detailsUpdateWithoutInvoicesInput, invoice_detailsUncheckedUpdateWithoutInvoicesInput>
    create: XOR<invoice_detailsCreateWithoutInvoicesInput, invoice_detailsUncheckedCreateWithoutInvoicesInput>
    where?: invoice_detailsWhereInput
  }

  export type invoice_detailsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: invoice_detailsWhereInput
    data: XOR<invoice_detailsUpdateWithoutInvoicesInput, invoice_detailsUncheckedUpdateWithoutInvoicesInput>
  }

  export type invoice_detailsUpdateWithoutInvoicesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoice_detailsUncheckedUpdateWithoutInvoicesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUpsertWithWhereUniqueWithoutInvoiceInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutInvoiceInput, transactionsUncheckedUpdateWithoutInvoiceInput>
    create: XOR<transactionsCreateWithoutInvoiceInput, transactionsUncheckedCreateWithoutInvoiceInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutInvoiceInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutInvoiceInput, transactionsUncheckedUpdateWithoutInvoiceInput>
  }

  export type transactionsUpdateManyWithWhereWithoutInvoiceInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutInvoiceInput>
  }

  export type clientsCreateWithoutSubscriptionsInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesCreateNestedManyWithoutClientInput
    transactions?: transactionsCreateNestedManyWithoutClientInput
  }

  export type clientsUncheckedCreateWithoutSubscriptionsInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesUncheckedCreateNestedManyWithoutClientInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientsCreateOrConnectWithoutSubscriptionsInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutSubscriptionsInput, clientsUncheckedCreateWithoutSubscriptionsInput>
  }

  export type clientsUpsertWithoutSubscriptionsInput = {
    update: XOR<clientsUpdateWithoutSubscriptionsInput, clientsUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<clientsCreateWithoutSubscriptionsInput, clientsUncheckedCreateWithoutSubscriptionsInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutSubscriptionsInput, clientsUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type clientsUpdateWithoutSubscriptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUpdateManyWithoutClientNestedInput
    transactions?: transactionsUpdateManyWithoutClientNestedInput
  }

  export type clientsUncheckedUpdateWithoutSubscriptionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUncheckedUpdateManyWithoutClientNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type transactionsCreateWithoutPayment_methodInput = {
    id?: bigint | number
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutTransactionsInput
    invoice: invoicesCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateWithoutPayment_methodInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_id: bigint | number
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateOrConnectWithoutPayment_methodInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutPayment_methodInput, transactionsUncheckedCreateWithoutPayment_methodInput>
  }

  export type transactionsCreateManyPayment_methodInputEnvelope = {
    data: transactionsCreateManyPayment_methodInput | transactionsCreateManyPayment_methodInput[]
    skipDuplicates?: boolean
  }

  export type transactionsUpsertWithWhereUniqueWithoutPayment_methodInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutPayment_methodInput, transactionsUncheckedUpdateWithoutPayment_methodInput>
    create: XOR<transactionsCreateWithoutPayment_methodInput, transactionsUncheckedCreateWithoutPayment_methodInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutPayment_methodInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutPayment_methodInput, transactionsUncheckedUpdateWithoutPayment_methodInput>
  }

  export type transactionsUpdateManyWithWhereWithoutPayment_methodInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutPayment_methodInput>
  }

  export type clientsCreateWithoutTransactionsInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesCreateNestedManyWithoutClientInput
    subscriptions?: subscriptionsCreateNestedManyWithoutClientInput
  }

  export type clientsUncheckedCreateWithoutTransactionsInput = {
    id?: bigint | number
    client_name: string
    email: string
    mobile: string
    company_name?: string | null
    password: string
    address?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    invoices?: invoicesUncheckedCreateNestedManyWithoutClientInput
    subscriptions?: subscriptionsUncheckedCreateNestedManyWithoutClientInput
  }

  export type clientsCreateOrConnectWithoutTransactionsInput = {
    where: clientsWhereUniqueInput
    create: XOR<clientsCreateWithoutTransactionsInput, clientsUncheckedCreateWithoutTransactionsInput>
  }

  export type invoicesCreateWithoutTransactionsInput = {
    id?: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    client: clientsCreateNestedOneWithoutInvoicesInput
    invoice_detail: invoice_detailsCreateNestedOneWithoutInvoicesInput
  }

  export type invoicesUncheckedCreateWithoutTransactionsInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    invoice_details_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoicesCreateOrConnectWithoutTransactionsInput = {
    where: invoicesWhereUniqueInput
    create: XOR<invoicesCreateWithoutTransactionsInput, invoicesUncheckedCreateWithoutTransactionsInput>
  }

  export type payment_methodsCreateWithoutTransactionsInput = {
    id?: bigint | number
    payment_method_name: string
    display_name: string
    slug: string
    sandbox_key?: string | null
    sandbox_secret?: string | null
    live_key?: string | null
    live_secret?: string | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_methodsUncheckedCreateWithoutTransactionsInput = {
    id?: bigint | number
    payment_method_name: string
    display_name: string
    slug: string
    sandbox_key?: string | null
    sandbox_secret?: string | null
    live_key?: string | null
    live_secret?: string | null
    publish?: number | null
    sort?: bigint | number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type payment_methodsCreateOrConnectWithoutTransactionsInput = {
    where: payment_methodsWhereUniqueInput
    create: XOR<payment_methodsCreateWithoutTransactionsInput, payment_methodsUncheckedCreateWithoutTransactionsInput>
  }

  export type clientsUpsertWithoutTransactionsInput = {
    update: XOR<clientsUpdateWithoutTransactionsInput, clientsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<clientsCreateWithoutTransactionsInput, clientsUncheckedCreateWithoutTransactionsInput>
    where?: clientsWhereInput
  }

  export type clientsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: clientsWhereInput
    data: XOR<clientsUpdateWithoutTransactionsInput, clientsUncheckedUpdateWithoutTransactionsInput>
  }

  export type clientsUpdateWithoutTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUpdateManyWithoutClientNestedInput
    subscriptions?: subscriptionsUpdateManyWithoutClientNestedInput
  }

  export type clientsUncheckedUpdateWithoutTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    company_name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: invoicesUncheckedUpdateManyWithoutClientNestedInput
    subscriptions?: subscriptionsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type invoicesUpsertWithoutTransactionsInput = {
    update: XOR<invoicesUpdateWithoutTransactionsInput, invoicesUncheckedUpdateWithoutTransactionsInput>
    create: XOR<invoicesCreateWithoutTransactionsInput, invoicesUncheckedCreateWithoutTransactionsInput>
    where?: invoicesWhereInput
  }

  export type invoicesUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: invoicesWhereInput
    data: XOR<invoicesUpdateWithoutTransactionsInput, invoicesUncheckedUpdateWithoutTransactionsInput>
  }

  export type invoicesUpdateWithoutTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
    invoice_detail?: invoice_detailsUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type invoicesUncheckedUpdateWithoutTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_details_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_methodsUpsertWithoutTransactionsInput = {
    update: XOR<payment_methodsUpdateWithoutTransactionsInput, payment_methodsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<payment_methodsCreateWithoutTransactionsInput, payment_methodsUncheckedCreateWithoutTransactionsInput>
    where?: payment_methodsWhereInput
  }

  export type payment_methodsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: payment_methodsWhereInput
    data: XOR<payment_methodsUpdateWithoutTransactionsInput, payment_methodsUncheckedUpdateWithoutTransactionsInput>
  }

  export type payment_methodsUpdateWithoutTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sandbox_key?: NullableStringFieldUpdateOperationsInput | string | null
    sandbox_secret?: NullableStringFieldUpdateOperationsInput | string | null
    live_key?: NullableStringFieldUpdateOperationsInput | string | null
    live_secret?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type payment_methodsUncheckedUpdateWithoutTransactionsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    sandbox_key?: NullableStringFieldUpdateOperationsInput | string | null
    sandbox_secret?: NullableStringFieldUpdateOperationsInput | string | null
    live_key?: NullableStringFieldUpdateOperationsInput | string | null
    live_secret?: NullableStringFieldUpdateOperationsInput | string | null
    publish?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seoCreateManyCmsInput = {
    id?: bigint | number
    seo_title?: string | null
    seo_keywords?: string | null
    seo_description?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type seoUpdateWithoutCmsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seoUncheckedUpdateWithoutCmsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type seoUncheckedUpdateManyWithoutCmsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    seo_title?: NullableStringFieldUpdateOperationsInput | string | null
    seo_keywords?: NullableStringFieldUpdateOperationsInput | string | null
    seo_description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateManyClientInput = {
    id?: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    invoice_details_id: bigint | number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsCreateManyClientInput = {
    id?: bigint | number
    invoice_id: bigint | number
    payment_method_id?: bigint | number | null
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type subscriptionsCreateManyClientInput = {
    id?: bigint | number
    title: string
    amount: string
    description?: string | null
    sub_title?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoicesUpdateWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice_detail?: invoice_detailsUpdateOneRequiredWithoutInvoicesNestedInput
    transactions?: transactionsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_details_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    invoice_details_id?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUpdateWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invoice?: invoicesUpdateOneRequiredWithoutTransactionsNestedInput
    payment_method?: payment_methodsUpdateOneWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUpdateWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUncheckedUpdateWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type subscriptionsUncheckedUpdateManyWithoutClientInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sub_title?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type invoicesCreateManyInvoice_detailInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_no: string
    amount?: string | null
    tax?: string | null
    gst?: string | null
    mail_sent?: number | null
    issue_date?: Date | string | null
    due_date?: Date | string | null
    payment_status?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type invoicesUpdateWithoutInvoice_detailInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutInvoicesNestedInput
    transactions?: transactionsUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateWithoutInvoice_detailInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: transactionsUncheckedUpdateManyWithoutInvoiceNestedInput
  }

  export type invoicesUncheckedUpdateManyWithoutInvoice_detailInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_no?: StringFieldUpdateOperationsInput | string
    amount?: NullableStringFieldUpdateOperationsInput | string | null
    tax?: NullableStringFieldUpdateOperationsInput | string | null
    gst?: NullableStringFieldUpdateOperationsInput | string | null
    mail_sent?: NullableIntFieldUpdateOperationsInput | number | null
    issue_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyInvoiceInput = {
    id?: bigint | number
    client_id: bigint | number
    payment_method_id?: bigint | number | null
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateWithoutInvoiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutTransactionsNestedInput
    payment_method?: payment_methodsUpdateOneWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutInvoiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutInvoiceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    payment_method_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsCreateManyPayment_methodInput = {
    id?: bigint | number
    client_id: bigint | number
    invoice_id: bigint | number
    amout?: string | null
    payment_status?: string | null
    payment_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type transactionsUpdateWithoutPayment_methodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: clientsUpdateOneRequiredWithoutTransactionsNestedInput
    invoice?: invoicesUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateWithoutPayment_methodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionsUncheckedUpdateManyWithoutPayment_methodInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    client_id?: BigIntFieldUpdateOperationsInput | bigint | number
    invoice_id?: BigIntFieldUpdateOperationsInput | bigint | number
    amout?: NullableStringFieldUpdateOperationsInput | string | null
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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