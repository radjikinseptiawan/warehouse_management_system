
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model vendors
 * 
 */
export type vendors = $Result.DefaultSelection<Prisma.$vendorsPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model lokasi_gudang
 * 
 */
export type lokasi_gudang = $Result.DefaultSelection<Prisma.$lokasi_gudangPayload>
/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model barang_masuk
 * 
 */
export type barang_masuk = $Result.DefaultSelection<Prisma.$barang_masukPayload>
/**
 * Model barang_keluar
 * 
 */
export type barang_keluar = $Result.DefaultSelection<Prisma.$barang_keluarPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendors`: Exposes CRUD operations for the **vendors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendors.findMany()
    * ```
    */
  get vendors(): Prisma.vendorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lokasi_gudang`: Exposes CRUD operations for the **lokasi_gudang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lokasi_gudangs
    * const lokasi_gudangs = await prisma.lokasi_gudang.findMany()
    * ```
    */
  get lokasi_gudang(): Prisma.lokasi_gudangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barang_masuk`: Exposes CRUD operations for the **barang_masuk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barang_masuks
    * const barang_masuks = await prisma.barang_masuk.findMany()
    * ```
    */
  get barang_masuk(): Prisma.barang_masukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barang_keluar`: Exposes CRUD operations for the **barang_keluar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barang_keluars
    * const barang_keluars = await prisma.barang_keluar.findMany()
    * ```
    */
  get barang_keluar(): Prisma.barang_keluarDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    user: 'user',
    vendors: 'vendors',
    category: 'category',
    lokasi_gudang: 'lokasi_gudang',
    produk: 'produk',
    barang_masuk: 'barang_masuk',
    barang_keluar: 'barang_keluar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vendors" | "category" | "lokasi_gudang" | "produk" | "barang_masuk" | "barang_keluar"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      vendors: {
        payload: Prisma.$vendorsPayload<ExtArgs>
        fields: Prisma.vendorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vendorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vendorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          findFirst: {
            args: Prisma.vendorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vendorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          findMany: {
            args: Prisma.vendorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>[]
          }
          create: {
            args: Prisma.vendorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          createMany: {
            args: Prisma.vendorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vendorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>[]
          }
          delete: {
            args: Prisma.vendorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          update: {
            args: Prisma.vendorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          deleteMany: {
            args: Prisma.vendorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vendorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vendorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>[]
          }
          upsert: {
            args: Prisma.vendorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vendorsPayload>
          }
          aggregate: {
            args: Prisma.VendorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendors>
          }
          groupBy: {
            args: Prisma.vendorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vendorsCountArgs<ExtArgs>
            result: $Utils.Optional<VendorsCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      lokasi_gudang: {
        payload: Prisma.$lokasi_gudangPayload<ExtArgs>
        fields: Prisma.lokasi_gudangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lokasi_gudangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lokasi_gudangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>
          }
          findFirst: {
            args: Prisma.lokasi_gudangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lokasi_gudangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>
          }
          findMany: {
            args: Prisma.lokasi_gudangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>[]
          }
          create: {
            args: Prisma.lokasi_gudangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>
          }
          createMany: {
            args: Prisma.lokasi_gudangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lokasi_gudangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>[]
          }
          delete: {
            args: Prisma.lokasi_gudangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>
          }
          update: {
            args: Prisma.lokasi_gudangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>
          }
          deleteMany: {
            args: Prisma.lokasi_gudangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lokasi_gudangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lokasi_gudangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>[]
          }
          upsert: {
            args: Prisma.lokasi_gudangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lokasi_gudangPayload>
          }
          aggregate: {
            args: Prisma.Lokasi_gudangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLokasi_gudang>
          }
          groupBy: {
            args: Prisma.lokasi_gudangGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lokasi_gudangGroupByOutputType>[]
          }
          count: {
            args: Prisma.lokasi_gudangCountArgs<ExtArgs>
            result: $Utils.Optional<Lokasi_gudangCountAggregateOutputType> | number
          }
        }
      }
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.produkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.produkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      barang_masuk: {
        payload: Prisma.$barang_masukPayload<ExtArgs>
        fields: Prisma.barang_masukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barang_masukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barang_masukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>
          }
          findFirst: {
            args: Prisma.barang_masukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barang_masukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>
          }
          findMany: {
            args: Prisma.barang_masukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>[]
          }
          create: {
            args: Prisma.barang_masukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>
          }
          createMany: {
            args: Prisma.barang_masukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.barang_masukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>[]
          }
          delete: {
            args: Prisma.barang_masukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>
          }
          update: {
            args: Prisma.barang_masukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>
          }
          deleteMany: {
            args: Prisma.barang_masukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barang_masukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.barang_masukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>[]
          }
          upsert: {
            args: Prisma.barang_masukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_masukPayload>
          }
          aggregate: {
            args: Prisma.Barang_masukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang_masuk>
          }
          groupBy: {
            args: Prisma.barang_masukGroupByArgs<ExtArgs>
            result: $Utils.Optional<Barang_masukGroupByOutputType>[]
          }
          count: {
            args: Prisma.barang_masukCountArgs<ExtArgs>
            result: $Utils.Optional<Barang_masukCountAggregateOutputType> | number
          }
        }
      }
      barang_keluar: {
        payload: Prisma.$barang_keluarPayload<ExtArgs>
        fields: Prisma.barang_keluarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.barang_keluarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.barang_keluarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>
          }
          findFirst: {
            args: Prisma.barang_keluarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.barang_keluarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>
          }
          findMany: {
            args: Prisma.barang_keluarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>[]
          }
          create: {
            args: Prisma.barang_keluarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>
          }
          createMany: {
            args: Prisma.barang_keluarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.barang_keluarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>[]
          }
          delete: {
            args: Prisma.barang_keluarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>
          }
          update: {
            args: Prisma.barang_keluarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>
          }
          deleteMany: {
            args: Prisma.barang_keluarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.barang_keluarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.barang_keluarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>[]
          }
          upsert: {
            args: Prisma.barang_keluarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$barang_keluarPayload>
          }
          aggregate: {
            args: Prisma.Barang_keluarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang_keluar>
          }
          groupBy: {
            args: Prisma.barang_keluarGroupByArgs<ExtArgs>
            result: $Utils.Optional<Barang_keluarGroupByOutputType>[]
          }
          count: {
            args: Prisma.barang_keluarCountArgs<ExtArgs>
            result: $Utils.Optional<Barang_keluarCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    vendors?: vendorsOmit
    category?: categoryOmit
    lokasi_gudang?: lokasi_gudangOmit
    produk?: produkOmit
    barang_masuk?: barang_masukOmit
    barang_keluar?: barang_keluarOmit
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
   * Count Type VendorsCountOutputType
   */

  export type VendorsCountOutputType = {
    produk: number
  }

  export type VendorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | VendorsCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * VendorsCountOutputType without action
   */
  export type VendorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorsCountOutputType
     */
    select?: VendorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorsCountOutputType without action
   */
  export type VendorsCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    produk: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | CategoryCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
  }


  /**
   * Count Type Lokasi_gudangCountOutputType
   */

  export type Lokasi_gudangCountOutputType = {
    produk: number
  }

  export type Lokasi_gudangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | Lokasi_gudangCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * Lokasi_gudangCountOutputType without action
   */
  export type Lokasi_gudangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi_gudangCountOutputType
     */
    select?: Lokasi_gudangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Lokasi_gudangCountOutputType without action
   */
  export type Lokasi_gudangCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
  }


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    outbound: number
    inbound: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outbound?: boolean | ProdukCountOutputTypeCountOutboundArgs
    inbound?: boolean | ProdukCountOutputTypeCountInboundArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountOutboundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barang_keluarWhereInput
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountInboundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barang_masukWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    password: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
  }


  /**
   * Model vendors
   */

  export type AggregateVendors = {
    _count: VendorsCountAggregateOutputType | null
    _avg: VendorsAvgAggregateOutputType | null
    _sum: VendorsSumAggregateOutputType | null
    _min: VendorsMinAggregateOutputType | null
    _max: VendorsMaxAggregateOutputType | null
  }

  export type VendorsAvgAggregateOutputType = {
    id: number | null
  }

  export type VendorsSumAggregateOutputType = {
    id: number | null
  }

  export type VendorsMinAggregateOutputType = {
    id: number | null
    nama_vendor: string | null
    warna_vendor: string | null
    alamat_vendor: string | null
  }

  export type VendorsMaxAggregateOutputType = {
    id: number | null
    nama_vendor: string | null
    warna_vendor: string | null
    alamat_vendor: string | null
  }

  export type VendorsCountAggregateOutputType = {
    id: number
    nama_vendor: number
    warna_vendor: number
    alamat_vendor: number
    _all: number
  }


  export type VendorsAvgAggregateInputType = {
    id?: true
  }

  export type VendorsSumAggregateInputType = {
    id?: true
  }

  export type VendorsMinAggregateInputType = {
    id?: true
    nama_vendor?: true
    warna_vendor?: true
    alamat_vendor?: true
  }

  export type VendorsMaxAggregateInputType = {
    id?: true
    nama_vendor?: true
    warna_vendor?: true
    alamat_vendor?: true
  }

  export type VendorsCountAggregateInputType = {
    id?: true
    nama_vendor?: true
    warna_vendor?: true
    alamat_vendor?: true
    _all?: true
  }

  export type VendorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendors to aggregate.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vendors
    **/
    _count?: true | VendorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorsMaxAggregateInputType
  }

  export type GetVendorsAggregateType<T extends VendorsAggregateArgs> = {
        [P in keyof T & keyof AggregateVendors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendors[P]>
      : GetScalarType<T[P], AggregateVendors[P]>
  }




  export type vendorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vendorsWhereInput
    orderBy?: vendorsOrderByWithAggregationInput | vendorsOrderByWithAggregationInput[]
    by: VendorsScalarFieldEnum[] | VendorsScalarFieldEnum
    having?: vendorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorsCountAggregateInputType | true
    _avg?: VendorsAvgAggregateInputType
    _sum?: VendorsSumAggregateInputType
    _min?: VendorsMinAggregateInputType
    _max?: VendorsMaxAggregateInputType
  }

  export type VendorsGroupByOutputType = {
    id: number
    nama_vendor: string
    warna_vendor: string
    alamat_vendor: string
    _count: VendorsCountAggregateOutputType | null
    _avg: VendorsAvgAggregateOutputType | null
    _sum: VendorsSumAggregateOutputType | null
    _min: VendorsMinAggregateOutputType | null
    _max: VendorsMaxAggregateOutputType | null
  }

  type GetVendorsGroupByPayload<T extends vendorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorsGroupByOutputType[P]>
            : GetScalarType<T[P], VendorsGroupByOutputType[P]>
        }
      >
    >


  export type vendorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_vendor?: boolean
    warna_vendor?: boolean
    alamat_vendor?: boolean
    produk?: boolean | vendors$produkArgs<ExtArgs>
    _count?: boolean | VendorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendors"]>

  export type vendorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_vendor?: boolean
    warna_vendor?: boolean
    alamat_vendor?: boolean
  }, ExtArgs["result"]["vendors"]>

  export type vendorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_vendor?: boolean
    warna_vendor?: boolean
    alamat_vendor?: boolean
  }, ExtArgs["result"]["vendors"]>

  export type vendorsSelectScalar = {
    id?: boolean
    nama_vendor?: boolean
    warna_vendor?: boolean
    alamat_vendor?: boolean
  }

  export type vendorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_vendor" | "warna_vendor" | "alamat_vendor", ExtArgs["result"]["vendors"]>
  export type vendorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | vendors$produkArgs<ExtArgs>
    _count?: boolean | VendorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vendorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type vendorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $vendorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vendors"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_vendor: string
      warna_vendor: string
      alamat_vendor: string
    }, ExtArgs["result"]["vendors"]>
    composites: {}
  }

  type vendorsGetPayload<S extends boolean | null | undefined | vendorsDefaultArgs> = $Result.GetResult<Prisma.$vendorsPayload, S>

  type vendorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vendorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorsCountAggregateInputType | true
    }

  export interface vendorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vendors'], meta: { name: 'vendors' } }
    /**
     * Find zero or one Vendors that matches the filter.
     * @param {vendorsFindUniqueArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vendorsFindUniqueArgs>(args: SelectSubset<T, vendorsFindUniqueArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vendorsFindUniqueOrThrowArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vendorsFindUniqueOrThrowArgs>(args: SelectSubset<T, vendorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsFindFirstArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vendorsFindFirstArgs>(args?: SelectSubset<T, vendorsFindFirstArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsFindFirstOrThrowArgs} args - Arguments to find a Vendors
     * @example
     * // Get one Vendors
     * const vendors = await prisma.vendors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vendorsFindFirstOrThrowArgs>(args?: SelectSubset<T, vendorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendors.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorsWithIdOnly = await prisma.vendors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vendorsFindManyArgs>(args?: SelectSubset<T, vendorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendors.
     * @param {vendorsCreateArgs} args - Arguments to create a Vendors.
     * @example
     * // Create one Vendors
     * const Vendors = await prisma.vendors.create({
     *   data: {
     *     // ... data to create a Vendors
     *   }
     * })
     * 
     */
    create<T extends vendorsCreateArgs>(args: SelectSubset<T, vendorsCreateArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendors.
     * @param {vendorsCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendors = await prisma.vendors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vendorsCreateManyArgs>(args?: SelectSubset<T, vendorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {vendorsCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendors = await prisma.vendors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorsWithIdOnly = await prisma.vendors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vendorsCreateManyAndReturnArgs>(args?: SelectSubset<T, vendorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vendors.
     * @param {vendorsDeleteArgs} args - Arguments to delete one Vendors.
     * @example
     * // Delete one Vendors
     * const Vendors = await prisma.vendors.delete({
     *   where: {
     *     // ... filter to delete one Vendors
     *   }
     * })
     * 
     */
    delete<T extends vendorsDeleteArgs>(args: SelectSubset<T, vendorsDeleteArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendors.
     * @param {vendorsUpdateArgs} args - Arguments to update one Vendors.
     * @example
     * // Update one Vendors
     * const vendors = await prisma.vendors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vendorsUpdateArgs>(args: SelectSubset<T, vendorsUpdateArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendors.
     * @param {vendorsDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vendorsDeleteManyArgs>(args?: SelectSubset<T, vendorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendors = await prisma.vendors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vendorsUpdateManyArgs>(args: SelectSubset<T, vendorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors and returns the data updated in the database.
     * @param {vendorsUpdateManyAndReturnArgs} args - Arguments to update many Vendors.
     * @example
     * // Update many Vendors
     * const vendors = await prisma.vendors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vendors and only return the `id`
     * const vendorsWithIdOnly = await prisma.vendors.updateManyAndReturn({
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
    updateManyAndReturn<T extends vendorsUpdateManyAndReturnArgs>(args: SelectSubset<T, vendorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vendors.
     * @param {vendorsUpsertArgs} args - Arguments to update or create a Vendors.
     * @example
     * // Update or create a Vendors
     * const vendors = await prisma.vendors.upsert({
     *   create: {
     *     // ... data to create a Vendors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendors we want to update
     *   }
     * })
     */
    upsert<T extends vendorsUpsertArgs>(args: SelectSubset<T, vendorsUpsertArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendors.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends vendorsCountArgs>(
      args?: Subset<T, vendorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendorsAggregateArgs>(args: Subset<T, VendorsAggregateArgs>): Prisma.PrismaPromise<GetVendorsAggregateType<T>>

    /**
     * Group by Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vendorsGroupByArgs} args - Group by arguments.
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
      T extends vendorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vendorsGroupByArgs['orderBy'] }
        : { orderBy?: vendorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vendorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vendors model
   */
  readonly fields: vendorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vendors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vendorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends vendors$produkArgs<ExtArgs> = {}>(args?: Subset<T, vendors$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the vendors model
   */
  interface vendorsFieldRefs {
    readonly id: FieldRef<"vendors", 'Int'>
    readonly nama_vendor: FieldRef<"vendors", 'String'>
    readonly warna_vendor: FieldRef<"vendors", 'String'>
    readonly alamat_vendor: FieldRef<"vendors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vendors findUnique
   */
  export type vendorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors findUniqueOrThrow
   */
  export type vendorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors findFirst
   */
  export type vendorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendors.
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendors.
     */
    distinct?: VendorsScalarFieldEnum | VendorsScalarFieldEnum[]
  }

  /**
   * vendors findFirstOrThrow
   */
  export type vendorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vendors.
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vendors.
     */
    distinct?: VendorsScalarFieldEnum | VendorsScalarFieldEnum[]
  }

  /**
   * vendors findMany
   */
  export type vendorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter, which vendors to fetch.
     */
    where?: vendorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vendors to fetch.
     */
    orderBy?: vendorsOrderByWithRelationInput | vendorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vendors.
     */
    cursor?: vendorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vendors.
     */
    skip?: number
    distinct?: VendorsScalarFieldEnum | VendorsScalarFieldEnum[]
  }

  /**
   * vendors create
   */
  export type vendorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * The data needed to create a vendors.
     */
    data: XOR<vendorsCreateInput, vendorsUncheckedCreateInput>
  }

  /**
   * vendors createMany
   */
  export type vendorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vendors.
     */
    data: vendorsCreateManyInput | vendorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendors createManyAndReturn
   */
  export type vendorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * The data used to create many vendors.
     */
    data: vendorsCreateManyInput | vendorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vendors update
   */
  export type vendorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * The data needed to update a vendors.
     */
    data: XOR<vendorsUpdateInput, vendorsUncheckedUpdateInput>
    /**
     * Choose, which vendors to update.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors updateMany
   */
  export type vendorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vendors.
     */
    data: XOR<vendorsUpdateManyMutationInput, vendorsUncheckedUpdateManyInput>
    /**
     * Filter which vendors to update
     */
    where?: vendorsWhereInput
    /**
     * Limit how many vendors to update.
     */
    limit?: number
  }

  /**
   * vendors updateManyAndReturn
   */
  export type vendorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * The data used to update vendors.
     */
    data: XOR<vendorsUpdateManyMutationInput, vendorsUncheckedUpdateManyInput>
    /**
     * Filter which vendors to update
     */
    where?: vendorsWhereInput
    /**
     * Limit how many vendors to update.
     */
    limit?: number
  }

  /**
   * vendors upsert
   */
  export type vendorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * The filter to search for the vendors to update in case it exists.
     */
    where: vendorsWhereUniqueInput
    /**
     * In case the vendors found by the `where` argument doesn't exist, create a new vendors with this data.
     */
    create: XOR<vendorsCreateInput, vendorsUncheckedCreateInput>
    /**
     * In case the vendors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vendorsUpdateInput, vendorsUncheckedUpdateInput>
  }

  /**
   * vendors delete
   */
  export type vendorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
    /**
     * Filter which vendors to delete.
     */
    where: vendorsWhereUniqueInput
  }

  /**
   * vendors deleteMany
   */
  export type vendorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vendors to delete
     */
    where?: vendorsWhereInput
    /**
     * Limit how many vendors to delete.
     */
    limit?: number
  }

  /**
   * vendors.produk
   */
  export type vendors$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    where?: produkWhereInput
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    cursor?: produkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * vendors without action
   */
  export type vendorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vendors
     */
    select?: vendorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vendors
     */
    omit?: vendorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vendorsInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    nama_kategori: string | null
    warna_category: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    nama_kategori: string | null
    warna_category: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    nama_kategori: number
    warna_category: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    nama_kategori?: true
    warna_category?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    nama_kategori?: true
    warna_category?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    nama_kategori?: true
    warna_category?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    nama_kategori: string
    warna_category: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_kategori?: boolean
    warna_category?: boolean
    produk?: boolean | category$produkArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_kategori?: boolean
    warna_category?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_kategori?: boolean
    warna_category?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    nama_kategori?: boolean
    warna_category?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_kategori" | "warna_category", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | category$produkArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_kategori: string
      warna_category: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
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
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends category$produkArgs<ExtArgs> = {}>(args?: Subset<T, category$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly nama_kategori: FieldRef<"category", 'String'>
    readonly warna_category: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.produk
   */
  export type category$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    where?: produkWhereInput
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    cursor?: produkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model lokasi_gudang
   */

  export type AggregateLokasi_gudang = {
    _count: Lokasi_gudangCountAggregateOutputType | null
    _avg: Lokasi_gudangAvgAggregateOutputType | null
    _sum: Lokasi_gudangSumAggregateOutputType | null
    _min: Lokasi_gudangMinAggregateOutputType | null
    _max: Lokasi_gudangMaxAggregateOutputType | null
  }

  export type Lokasi_gudangAvgAggregateOutputType = {
    id: number | null
  }

  export type Lokasi_gudangSumAggregateOutputType = {
    id: number | null
  }

  export type Lokasi_gudangMinAggregateOutputType = {
    id: number | null
    nama_gudang: string | null
    alamat_gudang: string | null
    warna_gudang: string | null
  }

  export type Lokasi_gudangMaxAggregateOutputType = {
    id: number | null
    nama_gudang: string | null
    alamat_gudang: string | null
    warna_gudang: string | null
  }

  export type Lokasi_gudangCountAggregateOutputType = {
    id: number
    nama_gudang: number
    alamat_gudang: number
    warna_gudang: number
    _all: number
  }


  export type Lokasi_gudangAvgAggregateInputType = {
    id?: true
  }

  export type Lokasi_gudangSumAggregateInputType = {
    id?: true
  }

  export type Lokasi_gudangMinAggregateInputType = {
    id?: true
    nama_gudang?: true
    alamat_gudang?: true
    warna_gudang?: true
  }

  export type Lokasi_gudangMaxAggregateInputType = {
    id?: true
    nama_gudang?: true
    alamat_gudang?: true
    warna_gudang?: true
  }

  export type Lokasi_gudangCountAggregateInputType = {
    id?: true
    nama_gudang?: true
    alamat_gudang?: true
    warna_gudang?: true
    _all?: true
  }

  export type Lokasi_gudangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lokasi_gudang to aggregate.
     */
    where?: lokasi_gudangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lokasi_gudangs to fetch.
     */
    orderBy?: lokasi_gudangOrderByWithRelationInput | lokasi_gudangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lokasi_gudangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lokasi_gudangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lokasi_gudangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lokasi_gudangs
    **/
    _count?: true | Lokasi_gudangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lokasi_gudangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lokasi_gudangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lokasi_gudangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lokasi_gudangMaxAggregateInputType
  }

  export type GetLokasi_gudangAggregateType<T extends Lokasi_gudangAggregateArgs> = {
        [P in keyof T & keyof AggregateLokasi_gudang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLokasi_gudang[P]>
      : GetScalarType<T[P], AggregateLokasi_gudang[P]>
  }




  export type lokasi_gudangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lokasi_gudangWhereInput
    orderBy?: lokasi_gudangOrderByWithAggregationInput | lokasi_gudangOrderByWithAggregationInput[]
    by: Lokasi_gudangScalarFieldEnum[] | Lokasi_gudangScalarFieldEnum
    having?: lokasi_gudangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lokasi_gudangCountAggregateInputType | true
    _avg?: Lokasi_gudangAvgAggregateInputType
    _sum?: Lokasi_gudangSumAggregateInputType
    _min?: Lokasi_gudangMinAggregateInputType
    _max?: Lokasi_gudangMaxAggregateInputType
  }

  export type Lokasi_gudangGroupByOutputType = {
    id: number
    nama_gudang: string
    alamat_gudang: string
    warna_gudang: string
    _count: Lokasi_gudangCountAggregateOutputType | null
    _avg: Lokasi_gudangAvgAggregateOutputType | null
    _sum: Lokasi_gudangSumAggregateOutputType | null
    _min: Lokasi_gudangMinAggregateOutputType | null
    _max: Lokasi_gudangMaxAggregateOutputType | null
  }

  type GetLokasi_gudangGroupByPayload<T extends lokasi_gudangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lokasi_gudangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lokasi_gudangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lokasi_gudangGroupByOutputType[P]>
            : GetScalarType<T[P], Lokasi_gudangGroupByOutputType[P]>
        }
      >
    >


  export type lokasi_gudangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_gudang?: boolean
    alamat_gudang?: boolean
    warna_gudang?: boolean
    produk?: boolean | lokasi_gudang$produkArgs<ExtArgs>
    _count?: boolean | Lokasi_gudangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lokasi_gudang"]>

  export type lokasi_gudangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_gudang?: boolean
    alamat_gudang?: boolean
    warna_gudang?: boolean
  }, ExtArgs["result"]["lokasi_gudang"]>

  export type lokasi_gudangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_gudang?: boolean
    alamat_gudang?: boolean
    warna_gudang?: boolean
  }, ExtArgs["result"]["lokasi_gudang"]>

  export type lokasi_gudangSelectScalar = {
    id?: boolean
    nama_gudang?: boolean
    alamat_gudang?: boolean
    warna_gudang?: boolean
  }

  export type lokasi_gudangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_gudang" | "alamat_gudang" | "warna_gudang", ExtArgs["result"]["lokasi_gudang"]>
  export type lokasi_gudangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | lokasi_gudang$produkArgs<ExtArgs>
    _count?: boolean | Lokasi_gudangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lokasi_gudangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type lokasi_gudangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $lokasi_gudangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lokasi_gudang"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_gudang: string
      alamat_gudang: string
      warna_gudang: string
    }, ExtArgs["result"]["lokasi_gudang"]>
    composites: {}
  }

  type lokasi_gudangGetPayload<S extends boolean | null | undefined | lokasi_gudangDefaultArgs> = $Result.GetResult<Prisma.$lokasi_gudangPayload, S>

  type lokasi_gudangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lokasi_gudangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lokasi_gudangCountAggregateInputType | true
    }

  export interface lokasi_gudangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lokasi_gudang'], meta: { name: 'lokasi_gudang' } }
    /**
     * Find zero or one Lokasi_gudang that matches the filter.
     * @param {lokasi_gudangFindUniqueArgs} args - Arguments to find a Lokasi_gudang
     * @example
     * // Get one Lokasi_gudang
     * const lokasi_gudang = await prisma.lokasi_gudang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lokasi_gudangFindUniqueArgs>(args: SelectSubset<T, lokasi_gudangFindUniqueArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lokasi_gudang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lokasi_gudangFindUniqueOrThrowArgs} args - Arguments to find a Lokasi_gudang
     * @example
     * // Get one Lokasi_gudang
     * const lokasi_gudang = await prisma.lokasi_gudang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lokasi_gudangFindUniqueOrThrowArgs>(args: SelectSubset<T, lokasi_gudangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lokasi_gudang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lokasi_gudangFindFirstArgs} args - Arguments to find a Lokasi_gudang
     * @example
     * // Get one Lokasi_gudang
     * const lokasi_gudang = await prisma.lokasi_gudang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lokasi_gudangFindFirstArgs>(args?: SelectSubset<T, lokasi_gudangFindFirstArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lokasi_gudang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lokasi_gudangFindFirstOrThrowArgs} args - Arguments to find a Lokasi_gudang
     * @example
     * // Get one Lokasi_gudang
     * const lokasi_gudang = await prisma.lokasi_gudang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lokasi_gudangFindFirstOrThrowArgs>(args?: SelectSubset<T, lokasi_gudangFindFirstOrThrowArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lokasi_gudangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lokasi_gudangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lokasi_gudangs
     * const lokasi_gudangs = await prisma.lokasi_gudang.findMany()
     * 
     * // Get first 10 Lokasi_gudangs
     * const lokasi_gudangs = await prisma.lokasi_gudang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lokasi_gudangWithIdOnly = await prisma.lokasi_gudang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lokasi_gudangFindManyArgs>(args?: SelectSubset<T, lokasi_gudangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lokasi_gudang.
     * @param {lokasi_gudangCreateArgs} args - Arguments to create a Lokasi_gudang.
     * @example
     * // Create one Lokasi_gudang
     * const Lokasi_gudang = await prisma.lokasi_gudang.create({
     *   data: {
     *     // ... data to create a Lokasi_gudang
     *   }
     * })
     * 
     */
    create<T extends lokasi_gudangCreateArgs>(args: SelectSubset<T, lokasi_gudangCreateArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lokasi_gudangs.
     * @param {lokasi_gudangCreateManyArgs} args - Arguments to create many Lokasi_gudangs.
     * @example
     * // Create many Lokasi_gudangs
     * const lokasi_gudang = await prisma.lokasi_gudang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lokasi_gudangCreateManyArgs>(args?: SelectSubset<T, lokasi_gudangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lokasi_gudangs and returns the data saved in the database.
     * @param {lokasi_gudangCreateManyAndReturnArgs} args - Arguments to create many Lokasi_gudangs.
     * @example
     * // Create many Lokasi_gudangs
     * const lokasi_gudang = await prisma.lokasi_gudang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lokasi_gudangs and only return the `id`
     * const lokasi_gudangWithIdOnly = await prisma.lokasi_gudang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lokasi_gudangCreateManyAndReturnArgs>(args?: SelectSubset<T, lokasi_gudangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lokasi_gudang.
     * @param {lokasi_gudangDeleteArgs} args - Arguments to delete one Lokasi_gudang.
     * @example
     * // Delete one Lokasi_gudang
     * const Lokasi_gudang = await prisma.lokasi_gudang.delete({
     *   where: {
     *     // ... filter to delete one Lokasi_gudang
     *   }
     * })
     * 
     */
    delete<T extends lokasi_gudangDeleteArgs>(args: SelectSubset<T, lokasi_gudangDeleteArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lokasi_gudang.
     * @param {lokasi_gudangUpdateArgs} args - Arguments to update one Lokasi_gudang.
     * @example
     * // Update one Lokasi_gudang
     * const lokasi_gudang = await prisma.lokasi_gudang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lokasi_gudangUpdateArgs>(args: SelectSubset<T, lokasi_gudangUpdateArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lokasi_gudangs.
     * @param {lokasi_gudangDeleteManyArgs} args - Arguments to filter Lokasi_gudangs to delete.
     * @example
     * // Delete a few Lokasi_gudangs
     * const { count } = await prisma.lokasi_gudang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lokasi_gudangDeleteManyArgs>(args?: SelectSubset<T, lokasi_gudangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lokasi_gudangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lokasi_gudangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lokasi_gudangs
     * const lokasi_gudang = await prisma.lokasi_gudang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lokasi_gudangUpdateManyArgs>(args: SelectSubset<T, lokasi_gudangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lokasi_gudangs and returns the data updated in the database.
     * @param {lokasi_gudangUpdateManyAndReturnArgs} args - Arguments to update many Lokasi_gudangs.
     * @example
     * // Update many Lokasi_gudangs
     * const lokasi_gudang = await prisma.lokasi_gudang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lokasi_gudangs and only return the `id`
     * const lokasi_gudangWithIdOnly = await prisma.lokasi_gudang.updateManyAndReturn({
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
    updateManyAndReturn<T extends lokasi_gudangUpdateManyAndReturnArgs>(args: SelectSubset<T, lokasi_gudangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lokasi_gudang.
     * @param {lokasi_gudangUpsertArgs} args - Arguments to update or create a Lokasi_gudang.
     * @example
     * // Update or create a Lokasi_gudang
     * const lokasi_gudang = await prisma.lokasi_gudang.upsert({
     *   create: {
     *     // ... data to create a Lokasi_gudang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lokasi_gudang we want to update
     *   }
     * })
     */
    upsert<T extends lokasi_gudangUpsertArgs>(args: SelectSubset<T, lokasi_gudangUpsertArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lokasi_gudangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lokasi_gudangCountArgs} args - Arguments to filter Lokasi_gudangs to count.
     * @example
     * // Count the number of Lokasi_gudangs
     * const count = await prisma.lokasi_gudang.count({
     *   where: {
     *     // ... the filter for the Lokasi_gudangs we want to count
     *   }
     * })
    **/
    count<T extends lokasi_gudangCountArgs>(
      args?: Subset<T, lokasi_gudangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lokasi_gudangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lokasi_gudang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lokasi_gudangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lokasi_gudangAggregateArgs>(args: Subset<T, Lokasi_gudangAggregateArgs>): Prisma.PrismaPromise<GetLokasi_gudangAggregateType<T>>

    /**
     * Group by Lokasi_gudang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lokasi_gudangGroupByArgs} args - Group by arguments.
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
      T extends lokasi_gudangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lokasi_gudangGroupByArgs['orderBy'] }
        : { orderBy?: lokasi_gudangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, lokasi_gudangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLokasi_gudangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lokasi_gudang model
   */
  readonly fields: lokasi_gudangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lokasi_gudang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lokasi_gudangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends lokasi_gudang$produkArgs<ExtArgs> = {}>(args?: Subset<T, lokasi_gudang$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the lokasi_gudang model
   */
  interface lokasi_gudangFieldRefs {
    readonly id: FieldRef<"lokasi_gudang", 'Int'>
    readonly nama_gudang: FieldRef<"lokasi_gudang", 'String'>
    readonly alamat_gudang: FieldRef<"lokasi_gudang", 'String'>
    readonly warna_gudang: FieldRef<"lokasi_gudang", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lokasi_gudang findUnique
   */
  export type lokasi_gudangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * Filter, which lokasi_gudang to fetch.
     */
    where: lokasi_gudangWhereUniqueInput
  }

  /**
   * lokasi_gudang findUniqueOrThrow
   */
  export type lokasi_gudangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * Filter, which lokasi_gudang to fetch.
     */
    where: lokasi_gudangWhereUniqueInput
  }

  /**
   * lokasi_gudang findFirst
   */
  export type lokasi_gudangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * Filter, which lokasi_gudang to fetch.
     */
    where?: lokasi_gudangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lokasi_gudangs to fetch.
     */
    orderBy?: lokasi_gudangOrderByWithRelationInput | lokasi_gudangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lokasi_gudangs.
     */
    cursor?: lokasi_gudangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lokasi_gudangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lokasi_gudangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lokasi_gudangs.
     */
    distinct?: Lokasi_gudangScalarFieldEnum | Lokasi_gudangScalarFieldEnum[]
  }

  /**
   * lokasi_gudang findFirstOrThrow
   */
  export type lokasi_gudangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * Filter, which lokasi_gudang to fetch.
     */
    where?: lokasi_gudangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lokasi_gudangs to fetch.
     */
    orderBy?: lokasi_gudangOrderByWithRelationInput | lokasi_gudangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lokasi_gudangs.
     */
    cursor?: lokasi_gudangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lokasi_gudangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lokasi_gudangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lokasi_gudangs.
     */
    distinct?: Lokasi_gudangScalarFieldEnum | Lokasi_gudangScalarFieldEnum[]
  }

  /**
   * lokasi_gudang findMany
   */
  export type lokasi_gudangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * Filter, which lokasi_gudangs to fetch.
     */
    where?: lokasi_gudangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lokasi_gudangs to fetch.
     */
    orderBy?: lokasi_gudangOrderByWithRelationInput | lokasi_gudangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lokasi_gudangs.
     */
    cursor?: lokasi_gudangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lokasi_gudangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lokasi_gudangs.
     */
    skip?: number
    distinct?: Lokasi_gudangScalarFieldEnum | Lokasi_gudangScalarFieldEnum[]
  }

  /**
   * lokasi_gudang create
   */
  export type lokasi_gudangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * The data needed to create a lokasi_gudang.
     */
    data: XOR<lokasi_gudangCreateInput, lokasi_gudangUncheckedCreateInput>
  }

  /**
   * lokasi_gudang createMany
   */
  export type lokasi_gudangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lokasi_gudangs.
     */
    data: lokasi_gudangCreateManyInput | lokasi_gudangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lokasi_gudang createManyAndReturn
   */
  export type lokasi_gudangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * The data used to create many lokasi_gudangs.
     */
    data: lokasi_gudangCreateManyInput | lokasi_gudangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lokasi_gudang update
   */
  export type lokasi_gudangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * The data needed to update a lokasi_gudang.
     */
    data: XOR<lokasi_gudangUpdateInput, lokasi_gudangUncheckedUpdateInput>
    /**
     * Choose, which lokasi_gudang to update.
     */
    where: lokasi_gudangWhereUniqueInput
  }

  /**
   * lokasi_gudang updateMany
   */
  export type lokasi_gudangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lokasi_gudangs.
     */
    data: XOR<lokasi_gudangUpdateManyMutationInput, lokasi_gudangUncheckedUpdateManyInput>
    /**
     * Filter which lokasi_gudangs to update
     */
    where?: lokasi_gudangWhereInput
    /**
     * Limit how many lokasi_gudangs to update.
     */
    limit?: number
  }

  /**
   * lokasi_gudang updateManyAndReturn
   */
  export type lokasi_gudangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * The data used to update lokasi_gudangs.
     */
    data: XOR<lokasi_gudangUpdateManyMutationInput, lokasi_gudangUncheckedUpdateManyInput>
    /**
     * Filter which lokasi_gudangs to update
     */
    where?: lokasi_gudangWhereInput
    /**
     * Limit how many lokasi_gudangs to update.
     */
    limit?: number
  }

  /**
   * lokasi_gudang upsert
   */
  export type lokasi_gudangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * The filter to search for the lokasi_gudang to update in case it exists.
     */
    where: lokasi_gudangWhereUniqueInput
    /**
     * In case the lokasi_gudang found by the `where` argument doesn't exist, create a new lokasi_gudang with this data.
     */
    create: XOR<lokasi_gudangCreateInput, lokasi_gudangUncheckedCreateInput>
    /**
     * In case the lokasi_gudang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lokasi_gudangUpdateInput, lokasi_gudangUncheckedUpdateInput>
  }

  /**
   * lokasi_gudang delete
   */
  export type lokasi_gudangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
    /**
     * Filter which lokasi_gudang to delete.
     */
    where: lokasi_gudangWhereUniqueInput
  }

  /**
   * lokasi_gudang deleteMany
   */
  export type lokasi_gudangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lokasi_gudangs to delete
     */
    where?: lokasi_gudangWhereInput
    /**
     * Limit how many lokasi_gudangs to delete.
     */
    limit?: number
  }

  /**
   * lokasi_gudang.produk
   */
  export type lokasi_gudang$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    where?: produkWhereInput
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    cursor?: produkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * lokasi_gudang without action
   */
  export type lokasi_gudangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lokasi_gudang
     */
    select?: lokasi_gudangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lokasi_gudang
     */
    omit?: lokasi_gudangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lokasi_gudangInclude<ExtArgs> | null
  }


  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    vendorsId: number | null
    jumlah: number | null
    lokasiId: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id: number | null
    kategoriId: number | null
    vendorsId: number | null
    jumlah: number | null
    lokasiId: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: number | null
    nama_produk: string | null
    kategoriId: number | null
    vendorsId: number | null
    jumlah: number | null
    lokasiId: number | null
    gambar_produk: string | null
    is_delete: boolean | null
    public_id: string | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: number | null
    nama_produk: string | null
    kategoriId: number | null
    vendorsId: number | null
    jumlah: number | null
    lokasiId: number | null
    gambar_produk: string | null
    is_delete: boolean | null
    public_id: string | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama_produk: number
    kategoriId: number
    vendorsId: number
    jumlah: number
    lokasiId: number
    gambar_produk: number
    is_delete: number
    public_id: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id?: true
    kategoriId?: true
    vendorsId?: true
    jumlah?: true
    lokasiId?: true
  }

  export type ProdukSumAggregateInputType = {
    id?: true
    kategoriId?: true
    vendorsId?: true
    jumlah?: true
    lokasiId?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama_produk?: true
    kategoriId?: true
    vendorsId?: true
    jumlah?: true
    lokasiId?: true
    gambar_produk?: true
    is_delete?: true
    public_id?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama_produk?: true
    kategoriId?: true
    vendorsId?: true
    jumlah?: true
    lokasiId?: true
    gambar_produk?: true
    is_delete?: true
    public_id?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama_produk?: true
    kategoriId?: true
    vendorsId?: true
    jumlah?: true
    lokasiId?: true
    gambar_produk?: true
    is_delete?: true
    public_id?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah: number
    lokasiId: number
    gambar_produk: string | null
    is_delete: boolean
    public_id: string | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_produk?: boolean
    kategoriId?: boolean
    vendorsId?: boolean
    jumlah?: boolean
    lokasiId?: boolean
    gambar_produk?: boolean
    is_delete?: boolean
    public_id?: boolean
    outbound?: boolean | produk$outboundArgs<ExtArgs>
    inbound?: boolean | produk$inboundArgs<ExtArgs>
    kategori?: boolean | categoryDefaultArgs<ExtArgs>
    lokasi?: boolean | lokasi_gudangDefaultArgs<ExtArgs>
    vendors?: boolean | vendorsDefaultArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type produkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_produk?: boolean
    kategoriId?: boolean
    vendorsId?: boolean
    jumlah?: boolean
    lokasiId?: boolean
    gambar_produk?: boolean
    is_delete?: boolean
    public_id?: boolean
    kategori?: boolean | categoryDefaultArgs<ExtArgs>
    lokasi?: boolean | lokasi_gudangDefaultArgs<ExtArgs>
    vendors?: boolean | vendorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type produkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_produk?: boolean
    kategoriId?: boolean
    vendorsId?: boolean
    jumlah?: boolean
    lokasiId?: boolean
    gambar_produk?: boolean
    is_delete?: boolean
    public_id?: boolean
    kategori?: boolean | categoryDefaultArgs<ExtArgs>
    lokasi?: boolean | lokasi_gudangDefaultArgs<ExtArgs>
    vendors?: boolean | vendorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type produkSelectScalar = {
    id?: boolean
    nama_produk?: boolean
    kategoriId?: boolean
    vendorsId?: boolean
    jumlah?: boolean
    lokasiId?: boolean
    gambar_produk?: boolean
    is_delete?: boolean
    public_id?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_produk" | "kategoriId" | "vendorsId" | "jumlah" | "lokasiId" | "gambar_produk" | "is_delete" | "public_id", ExtArgs["result"]["produk"]>
  export type produkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outbound?: boolean | produk$outboundArgs<ExtArgs>
    inbound?: boolean | produk$inboundArgs<ExtArgs>
    kategori?: boolean | categoryDefaultArgs<ExtArgs>
    lokasi?: boolean | lokasi_gudangDefaultArgs<ExtArgs>
    vendors?: boolean | vendorsDefaultArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type produkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | categoryDefaultArgs<ExtArgs>
    lokasi?: boolean | lokasi_gudangDefaultArgs<ExtArgs>
    vendors?: boolean | vendorsDefaultArgs<ExtArgs>
  }
  export type produkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | categoryDefaultArgs<ExtArgs>
    lokasi?: boolean | lokasi_gudangDefaultArgs<ExtArgs>
    vendors?: boolean | vendorsDefaultArgs<ExtArgs>
  }

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {
      outbound: Prisma.$barang_keluarPayload<ExtArgs>[]
      inbound: Prisma.$barang_masukPayload<ExtArgs>[]
      kategori: Prisma.$categoryPayload<ExtArgs>
      lokasi: Prisma.$lokasi_gudangPayload<ExtArgs>
      vendors: Prisma.$vendorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_produk: string
      kategoriId: number
      vendorsId: number
      jumlah: number
      lokasiId: number
      gambar_produk: string | null
      is_delete: boolean
      public_id: string | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {produkCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends produkCreateManyAndReturnArgs>(args?: SelectSubset<T, produkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {produkUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id`
     * const produkWithIdOnly = await prisma.produk.updateManyAndReturn({
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
    updateManyAndReturn<T extends produkUpdateManyAndReturnArgs>(args: SelectSubset<T, produkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
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
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outbound<T extends produk$outboundArgs<ExtArgs> = {}>(args?: Subset<T, produk$outboundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inbound<T extends produk$inboundArgs<ExtArgs> = {}>(args?: Subset<T, produk$inboundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kategori<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lokasi<T extends lokasi_gudangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lokasi_gudangDefaultArgs<ExtArgs>>): Prisma__lokasi_gudangClient<$Result.GetResult<Prisma.$lokasi_gudangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vendors<T extends vendorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vendorsDefaultArgs<ExtArgs>>): Prisma__vendorsClient<$Result.GetResult<Prisma.$vendorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id: FieldRef<"produk", 'Int'>
    readonly nama_produk: FieldRef<"produk", 'String'>
    readonly kategoriId: FieldRef<"produk", 'Int'>
    readonly vendorsId: FieldRef<"produk", 'Int'>
    readonly jumlah: FieldRef<"produk", 'Int'>
    readonly lokasiId: FieldRef<"produk", 'Int'>
    readonly gambar_produk: FieldRef<"produk", 'String'>
    readonly is_delete: FieldRef<"produk", 'Boolean'>
    readonly public_id: FieldRef<"produk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk createManyAndReturn
   */
  export type produkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk updateManyAndReturn
   */
  export type produkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk.outbound
   */
  export type produk$outboundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    where?: barang_keluarWhereInput
    orderBy?: barang_keluarOrderByWithRelationInput | barang_keluarOrderByWithRelationInput[]
    cursor?: barang_keluarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Barang_keluarScalarFieldEnum | Barang_keluarScalarFieldEnum[]
  }

  /**
   * produk.inbound
   */
  export type produk$inboundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    where?: barang_masukWhereInput
    orderBy?: barang_masukOrderByWithRelationInput | barang_masukOrderByWithRelationInput[]
    cursor?: barang_masukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Barang_masukScalarFieldEnum | Barang_masukScalarFieldEnum[]
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
  }


  /**
   * Model barang_masuk
   */

  export type AggregateBarang_masuk = {
    _count: Barang_masukCountAggregateOutputType | null
    _avg: Barang_masukAvgAggregateOutputType | null
    _sum: Barang_masukSumAggregateOutputType | null
    _min: Barang_masukMinAggregateOutputType | null
    _max: Barang_masukMaxAggregateOutputType | null
  }

  export type Barang_masukAvgAggregateOutputType = {
    id: number | null
    produkId: number | null
    nominal_modal: number | null
    jumlah_barang_masuk: number | null
  }

  export type Barang_masukSumAggregateOutputType = {
    id: number | null
    produkId: number | null
    nominal_modal: number | null
    jumlah_barang_masuk: number | null
  }

  export type Barang_masukMinAggregateOutputType = {
    id: number | null
    produkId: number | null
    tanggal_masuk: Date | null
    nominal_modal: number | null
    jumlah_barang_masuk: number | null
  }

  export type Barang_masukMaxAggregateOutputType = {
    id: number | null
    produkId: number | null
    tanggal_masuk: Date | null
    nominal_modal: number | null
    jumlah_barang_masuk: number | null
  }

  export type Barang_masukCountAggregateOutputType = {
    id: number
    produkId: number
    tanggal_masuk: number
    nominal_modal: number
    jumlah_barang_masuk: number
    _all: number
  }


  export type Barang_masukAvgAggregateInputType = {
    id?: true
    produkId?: true
    nominal_modal?: true
    jumlah_barang_masuk?: true
  }

  export type Barang_masukSumAggregateInputType = {
    id?: true
    produkId?: true
    nominal_modal?: true
    jumlah_barang_masuk?: true
  }

  export type Barang_masukMinAggregateInputType = {
    id?: true
    produkId?: true
    tanggal_masuk?: true
    nominal_modal?: true
    jumlah_barang_masuk?: true
  }

  export type Barang_masukMaxAggregateInputType = {
    id?: true
    produkId?: true
    tanggal_masuk?: true
    nominal_modal?: true
    jumlah_barang_masuk?: true
  }

  export type Barang_masukCountAggregateInputType = {
    id?: true
    produkId?: true
    tanggal_masuk?: true
    nominal_modal?: true
    jumlah_barang_masuk?: true
    _all?: true
  }

  export type Barang_masukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barang_masuk to aggregate.
     */
    where?: barang_masukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_masuks to fetch.
     */
    orderBy?: barang_masukOrderByWithRelationInput | barang_masukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barang_masukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barang_masuks
    **/
    _count?: true | Barang_masukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Barang_masukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Barang_masukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Barang_masukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Barang_masukMaxAggregateInputType
  }

  export type GetBarang_masukAggregateType<T extends Barang_masukAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang_masuk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang_masuk[P]>
      : GetScalarType<T[P], AggregateBarang_masuk[P]>
  }




  export type barang_masukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barang_masukWhereInput
    orderBy?: barang_masukOrderByWithAggregationInput | barang_masukOrderByWithAggregationInput[]
    by: Barang_masukScalarFieldEnum[] | Barang_masukScalarFieldEnum
    having?: barang_masukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Barang_masukCountAggregateInputType | true
    _avg?: Barang_masukAvgAggregateInputType
    _sum?: Barang_masukSumAggregateInputType
    _min?: Barang_masukMinAggregateInputType
    _max?: Barang_masukMaxAggregateInputType
  }

  export type Barang_masukGroupByOutputType = {
    id: number
    produkId: number
    tanggal_masuk: Date
    nominal_modal: number
    jumlah_barang_masuk: number
    _count: Barang_masukCountAggregateOutputType | null
    _avg: Barang_masukAvgAggregateOutputType | null
    _sum: Barang_masukSumAggregateOutputType | null
    _min: Barang_masukMinAggregateOutputType | null
    _max: Barang_masukMaxAggregateOutputType | null
  }

  type GetBarang_masukGroupByPayload<T extends barang_masukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Barang_masukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Barang_masukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Barang_masukGroupByOutputType[P]>
            : GetScalarType<T[P], Barang_masukGroupByOutputType[P]>
        }
      >
    >


  export type barang_masukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    tanggal_masuk?: boolean
    nominal_modal?: boolean
    jumlah_barang_masuk?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang_masuk"]>

  export type barang_masukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    tanggal_masuk?: boolean
    nominal_modal?: boolean
    jumlah_barang_masuk?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang_masuk"]>

  export type barang_masukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    tanggal_masuk?: boolean
    nominal_modal?: boolean
    jumlah_barang_masuk?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang_masuk"]>

  export type barang_masukSelectScalar = {
    id?: boolean
    produkId?: boolean
    tanggal_masuk?: boolean
    nominal_modal?: boolean
    jumlah_barang_masuk?: boolean
  }

  export type barang_masukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produkId" | "tanggal_masuk" | "nominal_modal" | "jumlah_barang_masuk", ExtArgs["result"]["barang_masuk"]>
  export type barang_masukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type barang_masukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type barang_masukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }

  export type $barang_masukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barang_masuk"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produkId: number
      tanggal_masuk: Date
      nominal_modal: number
      jumlah_barang_masuk: number
    }, ExtArgs["result"]["barang_masuk"]>
    composites: {}
  }

  type barang_masukGetPayload<S extends boolean | null | undefined | barang_masukDefaultArgs> = $Result.GetResult<Prisma.$barang_masukPayload, S>

  type barang_masukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barang_masukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Barang_masukCountAggregateInputType | true
    }

  export interface barang_masukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barang_masuk'], meta: { name: 'barang_masuk' } }
    /**
     * Find zero or one Barang_masuk that matches the filter.
     * @param {barang_masukFindUniqueArgs} args - Arguments to find a Barang_masuk
     * @example
     * // Get one Barang_masuk
     * const barang_masuk = await prisma.barang_masuk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barang_masukFindUniqueArgs>(args: SelectSubset<T, barang_masukFindUniqueArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang_masuk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barang_masukFindUniqueOrThrowArgs} args - Arguments to find a Barang_masuk
     * @example
     * // Get one Barang_masuk
     * const barang_masuk = await prisma.barang_masuk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barang_masukFindUniqueOrThrowArgs>(args: SelectSubset<T, barang_masukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang_masuk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_masukFindFirstArgs} args - Arguments to find a Barang_masuk
     * @example
     * // Get one Barang_masuk
     * const barang_masuk = await prisma.barang_masuk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barang_masukFindFirstArgs>(args?: SelectSubset<T, barang_masukFindFirstArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang_masuk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_masukFindFirstOrThrowArgs} args - Arguments to find a Barang_masuk
     * @example
     * // Get one Barang_masuk
     * const barang_masuk = await prisma.barang_masuk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barang_masukFindFirstOrThrowArgs>(args?: SelectSubset<T, barang_masukFindFirstOrThrowArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barang_masuks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_masukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barang_masuks
     * const barang_masuks = await prisma.barang_masuk.findMany()
     * 
     * // Get first 10 Barang_masuks
     * const barang_masuks = await prisma.barang_masuk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barang_masukWithIdOnly = await prisma.barang_masuk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends barang_masukFindManyArgs>(args?: SelectSubset<T, barang_masukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang_masuk.
     * @param {barang_masukCreateArgs} args - Arguments to create a Barang_masuk.
     * @example
     * // Create one Barang_masuk
     * const Barang_masuk = await prisma.barang_masuk.create({
     *   data: {
     *     // ... data to create a Barang_masuk
     *   }
     * })
     * 
     */
    create<T extends barang_masukCreateArgs>(args: SelectSubset<T, barang_masukCreateArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barang_masuks.
     * @param {barang_masukCreateManyArgs} args - Arguments to create many Barang_masuks.
     * @example
     * // Create many Barang_masuks
     * const barang_masuk = await prisma.barang_masuk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barang_masukCreateManyArgs>(args?: SelectSubset<T, barang_masukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barang_masuks and returns the data saved in the database.
     * @param {barang_masukCreateManyAndReturnArgs} args - Arguments to create many Barang_masuks.
     * @example
     * // Create many Barang_masuks
     * const barang_masuk = await prisma.barang_masuk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barang_masuks and only return the `id`
     * const barang_masukWithIdOnly = await prisma.barang_masuk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends barang_masukCreateManyAndReturnArgs>(args?: SelectSubset<T, barang_masukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barang_masuk.
     * @param {barang_masukDeleteArgs} args - Arguments to delete one Barang_masuk.
     * @example
     * // Delete one Barang_masuk
     * const Barang_masuk = await prisma.barang_masuk.delete({
     *   where: {
     *     // ... filter to delete one Barang_masuk
     *   }
     * })
     * 
     */
    delete<T extends barang_masukDeleteArgs>(args: SelectSubset<T, barang_masukDeleteArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang_masuk.
     * @param {barang_masukUpdateArgs} args - Arguments to update one Barang_masuk.
     * @example
     * // Update one Barang_masuk
     * const barang_masuk = await prisma.barang_masuk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barang_masukUpdateArgs>(args: SelectSubset<T, barang_masukUpdateArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barang_masuks.
     * @param {barang_masukDeleteManyArgs} args - Arguments to filter Barang_masuks to delete.
     * @example
     * // Delete a few Barang_masuks
     * const { count } = await prisma.barang_masuk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barang_masukDeleteManyArgs>(args?: SelectSubset<T, barang_masukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barang_masuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_masukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barang_masuks
     * const barang_masuk = await prisma.barang_masuk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barang_masukUpdateManyArgs>(args: SelectSubset<T, barang_masukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barang_masuks and returns the data updated in the database.
     * @param {barang_masukUpdateManyAndReturnArgs} args - Arguments to update many Barang_masuks.
     * @example
     * // Update many Barang_masuks
     * const barang_masuk = await prisma.barang_masuk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barang_masuks and only return the `id`
     * const barang_masukWithIdOnly = await prisma.barang_masuk.updateManyAndReturn({
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
    updateManyAndReturn<T extends barang_masukUpdateManyAndReturnArgs>(args: SelectSubset<T, barang_masukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barang_masuk.
     * @param {barang_masukUpsertArgs} args - Arguments to update or create a Barang_masuk.
     * @example
     * // Update or create a Barang_masuk
     * const barang_masuk = await prisma.barang_masuk.upsert({
     *   create: {
     *     // ... data to create a Barang_masuk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang_masuk we want to update
     *   }
     * })
     */
    upsert<T extends barang_masukUpsertArgs>(args: SelectSubset<T, barang_masukUpsertArgs<ExtArgs>>): Prisma__barang_masukClient<$Result.GetResult<Prisma.$barang_masukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barang_masuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_masukCountArgs} args - Arguments to filter Barang_masuks to count.
     * @example
     * // Count the number of Barang_masuks
     * const count = await prisma.barang_masuk.count({
     *   where: {
     *     // ... the filter for the Barang_masuks we want to count
     *   }
     * })
    **/
    count<T extends barang_masukCountArgs>(
      args?: Subset<T, barang_masukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Barang_masukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang_masuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Barang_masukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Barang_masukAggregateArgs>(args: Subset<T, Barang_masukAggregateArgs>): Prisma.PrismaPromise<GetBarang_masukAggregateType<T>>

    /**
     * Group by Barang_masuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_masukGroupByArgs} args - Group by arguments.
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
      T extends barang_masukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barang_masukGroupByArgs['orderBy'] }
        : { orderBy?: barang_masukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, barang_masukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarang_masukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barang_masuk model
   */
  readonly fields: barang_masukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barang_masuk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barang_masukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the barang_masuk model
   */
  interface barang_masukFieldRefs {
    readonly id: FieldRef<"barang_masuk", 'Int'>
    readonly produkId: FieldRef<"barang_masuk", 'Int'>
    readonly tanggal_masuk: FieldRef<"barang_masuk", 'DateTime'>
    readonly nominal_modal: FieldRef<"barang_masuk", 'Int'>
    readonly jumlah_barang_masuk: FieldRef<"barang_masuk", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * barang_masuk findUnique
   */
  export type barang_masukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * Filter, which barang_masuk to fetch.
     */
    where: barang_masukWhereUniqueInput
  }

  /**
   * barang_masuk findUniqueOrThrow
   */
  export type barang_masukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * Filter, which barang_masuk to fetch.
     */
    where: barang_masukWhereUniqueInput
  }

  /**
   * barang_masuk findFirst
   */
  export type barang_masukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * Filter, which barang_masuk to fetch.
     */
    where?: barang_masukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_masuks to fetch.
     */
    orderBy?: barang_masukOrderByWithRelationInput | barang_masukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barang_masuks.
     */
    cursor?: barang_masukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barang_masuks.
     */
    distinct?: Barang_masukScalarFieldEnum | Barang_masukScalarFieldEnum[]
  }

  /**
   * barang_masuk findFirstOrThrow
   */
  export type barang_masukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * Filter, which barang_masuk to fetch.
     */
    where?: barang_masukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_masuks to fetch.
     */
    orderBy?: barang_masukOrderByWithRelationInput | barang_masukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barang_masuks.
     */
    cursor?: barang_masukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barang_masuks.
     */
    distinct?: Barang_masukScalarFieldEnum | Barang_masukScalarFieldEnum[]
  }

  /**
   * barang_masuk findMany
   */
  export type barang_masukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * Filter, which barang_masuks to fetch.
     */
    where?: barang_masukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_masuks to fetch.
     */
    orderBy?: barang_masukOrderByWithRelationInput | barang_masukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barang_masuks.
     */
    cursor?: barang_masukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_masuks.
     */
    skip?: number
    distinct?: Barang_masukScalarFieldEnum | Barang_masukScalarFieldEnum[]
  }

  /**
   * barang_masuk create
   */
  export type barang_masukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * The data needed to create a barang_masuk.
     */
    data: XOR<barang_masukCreateInput, barang_masukUncheckedCreateInput>
  }

  /**
   * barang_masuk createMany
   */
  export type barang_masukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barang_masuks.
     */
    data: barang_masukCreateManyInput | barang_masukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barang_masuk createManyAndReturn
   */
  export type barang_masukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * The data used to create many barang_masuks.
     */
    data: barang_masukCreateManyInput | barang_masukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * barang_masuk update
   */
  export type barang_masukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * The data needed to update a barang_masuk.
     */
    data: XOR<barang_masukUpdateInput, barang_masukUncheckedUpdateInput>
    /**
     * Choose, which barang_masuk to update.
     */
    where: barang_masukWhereUniqueInput
  }

  /**
   * barang_masuk updateMany
   */
  export type barang_masukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barang_masuks.
     */
    data: XOR<barang_masukUpdateManyMutationInput, barang_masukUncheckedUpdateManyInput>
    /**
     * Filter which barang_masuks to update
     */
    where?: barang_masukWhereInput
    /**
     * Limit how many barang_masuks to update.
     */
    limit?: number
  }

  /**
   * barang_masuk updateManyAndReturn
   */
  export type barang_masukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * The data used to update barang_masuks.
     */
    data: XOR<barang_masukUpdateManyMutationInput, barang_masukUncheckedUpdateManyInput>
    /**
     * Filter which barang_masuks to update
     */
    where?: barang_masukWhereInput
    /**
     * Limit how many barang_masuks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * barang_masuk upsert
   */
  export type barang_masukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * The filter to search for the barang_masuk to update in case it exists.
     */
    where: barang_masukWhereUniqueInput
    /**
     * In case the barang_masuk found by the `where` argument doesn't exist, create a new barang_masuk with this data.
     */
    create: XOR<barang_masukCreateInput, barang_masukUncheckedCreateInput>
    /**
     * In case the barang_masuk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barang_masukUpdateInput, barang_masukUncheckedUpdateInput>
  }

  /**
   * barang_masuk delete
   */
  export type barang_masukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
    /**
     * Filter which barang_masuk to delete.
     */
    where: barang_masukWhereUniqueInput
  }

  /**
   * barang_masuk deleteMany
   */
  export type barang_masukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barang_masuks to delete
     */
    where?: barang_masukWhereInput
    /**
     * Limit how many barang_masuks to delete.
     */
    limit?: number
  }

  /**
   * barang_masuk without action
   */
  export type barang_masukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_masuk
     */
    select?: barang_masukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_masuk
     */
    omit?: barang_masukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_masukInclude<ExtArgs> | null
  }


  /**
   * Model barang_keluar
   */

  export type AggregateBarang_keluar = {
    _count: Barang_keluarCountAggregateOutputType | null
    _avg: Barang_keluarAvgAggregateOutputType | null
    _sum: Barang_keluarSumAggregateOutputType | null
    _min: Barang_keluarMinAggregateOutputType | null
    _max: Barang_keluarMaxAggregateOutputType | null
  }

  export type Barang_keluarAvgAggregateOutputType = {
    id: number | null
    produkId: number | null
    nominal_modal: number | null
    jumlah_barang_keluar: number | null
  }

  export type Barang_keluarSumAggregateOutputType = {
    id: number | null
    produkId: number | null
    nominal_modal: number | null
    jumlah_barang_keluar: number | null
  }

  export type Barang_keluarMinAggregateOutputType = {
    id: number | null
    produkId: number | null
    tanggal_keluar: Date | null
    nominal_modal: number | null
    jumlah_barang_keluar: number | null
  }

  export type Barang_keluarMaxAggregateOutputType = {
    id: number | null
    produkId: number | null
    tanggal_keluar: Date | null
    nominal_modal: number | null
    jumlah_barang_keluar: number | null
  }

  export type Barang_keluarCountAggregateOutputType = {
    id: number
    produkId: number
    tanggal_keluar: number
    nominal_modal: number
    jumlah_barang_keluar: number
    _all: number
  }


  export type Barang_keluarAvgAggregateInputType = {
    id?: true
    produkId?: true
    nominal_modal?: true
    jumlah_barang_keluar?: true
  }

  export type Barang_keluarSumAggregateInputType = {
    id?: true
    produkId?: true
    nominal_modal?: true
    jumlah_barang_keluar?: true
  }

  export type Barang_keluarMinAggregateInputType = {
    id?: true
    produkId?: true
    tanggal_keluar?: true
    nominal_modal?: true
    jumlah_barang_keluar?: true
  }

  export type Barang_keluarMaxAggregateInputType = {
    id?: true
    produkId?: true
    tanggal_keluar?: true
    nominal_modal?: true
    jumlah_barang_keluar?: true
  }

  export type Barang_keluarCountAggregateInputType = {
    id?: true
    produkId?: true
    tanggal_keluar?: true
    nominal_modal?: true
    jumlah_barang_keluar?: true
    _all?: true
  }

  export type Barang_keluarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barang_keluar to aggregate.
     */
    where?: barang_keluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_keluars to fetch.
     */
    orderBy?: barang_keluarOrderByWithRelationInput | barang_keluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: barang_keluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned barang_keluars
    **/
    _count?: true | Barang_keluarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Barang_keluarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Barang_keluarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Barang_keluarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Barang_keluarMaxAggregateInputType
  }

  export type GetBarang_keluarAggregateType<T extends Barang_keluarAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang_keluar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang_keluar[P]>
      : GetScalarType<T[P], AggregateBarang_keluar[P]>
  }




  export type barang_keluarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: barang_keluarWhereInput
    orderBy?: barang_keluarOrderByWithAggregationInput | barang_keluarOrderByWithAggregationInput[]
    by: Barang_keluarScalarFieldEnum[] | Barang_keluarScalarFieldEnum
    having?: barang_keluarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Barang_keluarCountAggregateInputType | true
    _avg?: Barang_keluarAvgAggregateInputType
    _sum?: Barang_keluarSumAggregateInputType
    _min?: Barang_keluarMinAggregateInputType
    _max?: Barang_keluarMaxAggregateInputType
  }

  export type Barang_keluarGroupByOutputType = {
    id: number
    produkId: number
    tanggal_keluar: Date
    nominal_modal: number
    jumlah_barang_keluar: number
    _count: Barang_keluarCountAggregateOutputType | null
    _avg: Barang_keluarAvgAggregateOutputType | null
    _sum: Barang_keluarSumAggregateOutputType | null
    _min: Barang_keluarMinAggregateOutputType | null
    _max: Barang_keluarMaxAggregateOutputType | null
  }

  type GetBarang_keluarGroupByPayload<T extends barang_keluarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Barang_keluarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Barang_keluarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Barang_keluarGroupByOutputType[P]>
            : GetScalarType<T[P], Barang_keluarGroupByOutputType[P]>
        }
      >
    >


  export type barang_keluarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    tanggal_keluar?: boolean
    nominal_modal?: boolean
    jumlah_barang_keluar?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang_keluar"]>

  export type barang_keluarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    tanggal_keluar?: boolean
    nominal_modal?: boolean
    jumlah_barang_keluar?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang_keluar"]>

  export type barang_keluarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produkId?: boolean
    tanggal_keluar?: boolean
    nominal_modal?: boolean
    jumlah_barang_keluar?: boolean
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang_keluar"]>

  export type barang_keluarSelectScalar = {
    id?: boolean
    produkId?: boolean
    tanggal_keluar?: boolean
    nominal_modal?: boolean
    jumlah_barang_keluar?: boolean
  }

  export type barang_keluarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produkId" | "tanggal_keluar" | "nominal_modal" | "jumlah_barang_keluar", ExtArgs["result"]["barang_keluar"]>
  export type barang_keluarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type barang_keluarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }
  export type barang_keluarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | produkDefaultArgs<ExtArgs>
  }

  export type $barang_keluarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "barang_keluar"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      produkId: number
      tanggal_keluar: Date
      nominal_modal: number
      jumlah_barang_keluar: number
    }, ExtArgs["result"]["barang_keluar"]>
    composites: {}
  }

  type barang_keluarGetPayload<S extends boolean | null | undefined | barang_keluarDefaultArgs> = $Result.GetResult<Prisma.$barang_keluarPayload, S>

  type barang_keluarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<barang_keluarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Barang_keluarCountAggregateInputType | true
    }

  export interface barang_keluarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['barang_keluar'], meta: { name: 'barang_keluar' } }
    /**
     * Find zero or one Barang_keluar that matches the filter.
     * @param {barang_keluarFindUniqueArgs} args - Arguments to find a Barang_keluar
     * @example
     * // Get one Barang_keluar
     * const barang_keluar = await prisma.barang_keluar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends barang_keluarFindUniqueArgs>(args: SelectSubset<T, barang_keluarFindUniqueArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang_keluar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {barang_keluarFindUniqueOrThrowArgs} args - Arguments to find a Barang_keluar
     * @example
     * // Get one Barang_keluar
     * const barang_keluar = await prisma.barang_keluar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends barang_keluarFindUniqueOrThrowArgs>(args: SelectSubset<T, barang_keluarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang_keluar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_keluarFindFirstArgs} args - Arguments to find a Barang_keluar
     * @example
     * // Get one Barang_keluar
     * const barang_keluar = await prisma.barang_keluar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends barang_keluarFindFirstArgs>(args?: SelectSubset<T, barang_keluarFindFirstArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang_keluar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_keluarFindFirstOrThrowArgs} args - Arguments to find a Barang_keluar
     * @example
     * // Get one Barang_keluar
     * const barang_keluar = await prisma.barang_keluar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends barang_keluarFindFirstOrThrowArgs>(args?: SelectSubset<T, barang_keluarFindFirstOrThrowArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barang_keluars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_keluarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barang_keluars
     * const barang_keluars = await prisma.barang_keluar.findMany()
     * 
     * // Get first 10 Barang_keluars
     * const barang_keluars = await prisma.barang_keluar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barang_keluarWithIdOnly = await prisma.barang_keluar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends barang_keluarFindManyArgs>(args?: SelectSubset<T, barang_keluarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang_keluar.
     * @param {barang_keluarCreateArgs} args - Arguments to create a Barang_keluar.
     * @example
     * // Create one Barang_keluar
     * const Barang_keluar = await prisma.barang_keluar.create({
     *   data: {
     *     // ... data to create a Barang_keluar
     *   }
     * })
     * 
     */
    create<T extends barang_keluarCreateArgs>(args: SelectSubset<T, barang_keluarCreateArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barang_keluars.
     * @param {barang_keluarCreateManyArgs} args - Arguments to create many Barang_keluars.
     * @example
     * // Create many Barang_keluars
     * const barang_keluar = await prisma.barang_keluar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends barang_keluarCreateManyArgs>(args?: SelectSubset<T, barang_keluarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barang_keluars and returns the data saved in the database.
     * @param {barang_keluarCreateManyAndReturnArgs} args - Arguments to create many Barang_keluars.
     * @example
     * // Create many Barang_keluars
     * const barang_keluar = await prisma.barang_keluar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barang_keluars and only return the `id`
     * const barang_keluarWithIdOnly = await prisma.barang_keluar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends barang_keluarCreateManyAndReturnArgs>(args?: SelectSubset<T, barang_keluarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barang_keluar.
     * @param {barang_keluarDeleteArgs} args - Arguments to delete one Barang_keluar.
     * @example
     * // Delete one Barang_keluar
     * const Barang_keluar = await prisma.barang_keluar.delete({
     *   where: {
     *     // ... filter to delete one Barang_keluar
     *   }
     * })
     * 
     */
    delete<T extends barang_keluarDeleteArgs>(args: SelectSubset<T, barang_keluarDeleteArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang_keluar.
     * @param {barang_keluarUpdateArgs} args - Arguments to update one Barang_keluar.
     * @example
     * // Update one Barang_keluar
     * const barang_keluar = await prisma.barang_keluar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends barang_keluarUpdateArgs>(args: SelectSubset<T, barang_keluarUpdateArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barang_keluars.
     * @param {barang_keluarDeleteManyArgs} args - Arguments to filter Barang_keluars to delete.
     * @example
     * // Delete a few Barang_keluars
     * const { count } = await prisma.barang_keluar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends barang_keluarDeleteManyArgs>(args?: SelectSubset<T, barang_keluarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barang_keluars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_keluarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barang_keluars
     * const barang_keluar = await prisma.barang_keluar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends barang_keluarUpdateManyArgs>(args: SelectSubset<T, barang_keluarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barang_keluars and returns the data updated in the database.
     * @param {barang_keluarUpdateManyAndReturnArgs} args - Arguments to update many Barang_keluars.
     * @example
     * // Update many Barang_keluars
     * const barang_keluar = await prisma.barang_keluar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barang_keluars and only return the `id`
     * const barang_keluarWithIdOnly = await prisma.barang_keluar.updateManyAndReturn({
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
    updateManyAndReturn<T extends barang_keluarUpdateManyAndReturnArgs>(args: SelectSubset<T, barang_keluarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barang_keluar.
     * @param {barang_keluarUpsertArgs} args - Arguments to update or create a Barang_keluar.
     * @example
     * // Update or create a Barang_keluar
     * const barang_keluar = await prisma.barang_keluar.upsert({
     *   create: {
     *     // ... data to create a Barang_keluar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang_keluar we want to update
     *   }
     * })
     */
    upsert<T extends barang_keluarUpsertArgs>(args: SelectSubset<T, barang_keluarUpsertArgs<ExtArgs>>): Prisma__barang_keluarClient<$Result.GetResult<Prisma.$barang_keluarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barang_keluars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_keluarCountArgs} args - Arguments to filter Barang_keluars to count.
     * @example
     * // Count the number of Barang_keluars
     * const count = await prisma.barang_keluar.count({
     *   where: {
     *     // ... the filter for the Barang_keluars we want to count
     *   }
     * })
    **/
    count<T extends barang_keluarCountArgs>(
      args?: Subset<T, barang_keluarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Barang_keluarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang_keluar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Barang_keluarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Barang_keluarAggregateArgs>(args: Subset<T, Barang_keluarAggregateArgs>): Prisma.PrismaPromise<GetBarang_keluarAggregateType<T>>

    /**
     * Group by Barang_keluar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {barang_keluarGroupByArgs} args - Group by arguments.
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
      T extends barang_keluarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: barang_keluarGroupByArgs['orderBy'] }
        : { orderBy?: barang_keluarGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, barang_keluarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarang_keluarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the barang_keluar model
   */
  readonly fields: barang_keluarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for barang_keluar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__barang_keluarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the barang_keluar model
   */
  interface barang_keluarFieldRefs {
    readonly id: FieldRef<"barang_keluar", 'Int'>
    readonly produkId: FieldRef<"barang_keluar", 'Int'>
    readonly tanggal_keluar: FieldRef<"barang_keluar", 'DateTime'>
    readonly nominal_modal: FieldRef<"barang_keluar", 'Int'>
    readonly jumlah_barang_keluar: FieldRef<"barang_keluar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * barang_keluar findUnique
   */
  export type barang_keluarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * Filter, which barang_keluar to fetch.
     */
    where: barang_keluarWhereUniqueInput
  }

  /**
   * barang_keluar findUniqueOrThrow
   */
  export type barang_keluarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * Filter, which barang_keluar to fetch.
     */
    where: barang_keluarWhereUniqueInput
  }

  /**
   * barang_keluar findFirst
   */
  export type barang_keluarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * Filter, which barang_keluar to fetch.
     */
    where?: barang_keluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_keluars to fetch.
     */
    orderBy?: barang_keluarOrderByWithRelationInput | barang_keluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barang_keluars.
     */
    cursor?: barang_keluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barang_keluars.
     */
    distinct?: Barang_keluarScalarFieldEnum | Barang_keluarScalarFieldEnum[]
  }

  /**
   * barang_keluar findFirstOrThrow
   */
  export type barang_keluarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * Filter, which barang_keluar to fetch.
     */
    where?: barang_keluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_keluars to fetch.
     */
    orderBy?: barang_keluarOrderByWithRelationInput | barang_keluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for barang_keluars.
     */
    cursor?: barang_keluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of barang_keluars.
     */
    distinct?: Barang_keluarScalarFieldEnum | Barang_keluarScalarFieldEnum[]
  }

  /**
   * barang_keluar findMany
   */
  export type barang_keluarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * Filter, which barang_keluars to fetch.
     */
    where?: barang_keluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of barang_keluars to fetch.
     */
    orderBy?: barang_keluarOrderByWithRelationInput | barang_keluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing barang_keluars.
     */
    cursor?: barang_keluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` barang_keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` barang_keluars.
     */
    skip?: number
    distinct?: Barang_keluarScalarFieldEnum | Barang_keluarScalarFieldEnum[]
  }

  /**
   * barang_keluar create
   */
  export type barang_keluarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * The data needed to create a barang_keluar.
     */
    data: XOR<barang_keluarCreateInput, barang_keluarUncheckedCreateInput>
  }

  /**
   * barang_keluar createMany
   */
  export type barang_keluarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many barang_keluars.
     */
    data: barang_keluarCreateManyInput | barang_keluarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * barang_keluar createManyAndReturn
   */
  export type barang_keluarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * The data used to create many barang_keluars.
     */
    data: barang_keluarCreateManyInput | barang_keluarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * barang_keluar update
   */
  export type barang_keluarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * The data needed to update a barang_keluar.
     */
    data: XOR<barang_keluarUpdateInput, barang_keluarUncheckedUpdateInput>
    /**
     * Choose, which barang_keluar to update.
     */
    where: barang_keluarWhereUniqueInput
  }

  /**
   * barang_keluar updateMany
   */
  export type barang_keluarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update barang_keluars.
     */
    data: XOR<barang_keluarUpdateManyMutationInput, barang_keluarUncheckedUpdateManyInput>
    /**
     * Filter which barang_keluars to update
     */
    where?: barang_keluarWhereInput
    /**
     * Limit how many barang_keluars to update.
     */
    limit?: number
  }

  /**
   * barang_keluar updateManyAndReturn
   */
  export type barang_keluarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * The data used to update barang_keluars.
     */
    data: XOR<barang_keluarUpdateManyMutationInput, barang_keluarUncheckedUpdateManyInput>
    /**
     * Filter which barang_keluars to update
     */
    where?: barang_keluarWhereInput
    /**
     * Limit how many barang_keluars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * barang_keluar upsert
   */
  export type barang_keluarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * The filter to search for the barang_keluar to update in case it exists.
     */
    where: barang_keluarWhereUniqueInput
    /**
     * In case the barang_keluar found by the `where` argument doesn't exist, create a new barang_keluar with this data.
     */
    create: XOR<barang_keluarCreateInput, barang_keluarUncheckedCreateInput>
    /**
     * In case the barang_keluar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<barang_keluarUpdateInput, barang_keluarUncheckedUpdateInput>
  }

  /**
   * barang_keluar delete
   */
  export type barang_keluarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
    /**
     * Filter which barang_keluar to delete.
     */
    where: barang_keluarWhereUniqueInput
  }

  /**
   * barang_keluar deleteMany
   */
  export type barang_keluarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which barang_keluars to delete
     */
    where?: barang_keluarWhereInput
    /**
     * Limit how many barang_keluars to delete.
     */
    limit?: number
  }

  /**
   * barang_keluar without action
   */
  export type barang_keluarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the barang_keluar
     */
    select?: barang_keluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the barang_keluar
     */
    omit?: barang_keluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: barang_keluarInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VendorsScalarFieldEnum: {
    id: 'id',
    nama_vendor: 'nama_vendor',
    warna_vendor: 'warna_vendor',
    alamat_vendor: 'alamat_vendor'
  };

  export type VendorsScalarFieldEnum = (typeof VendorsScalarFieldEnum)[keyof typeof VendorsScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    nama_kategori: 'nama_kategori',
    warna_category: 'warna_category'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const Lokasi_gudangScalarFieldEnum: {
    id: 'id',
    nama_gudang: 'nama_gudang',
    alamat_gudang: 'alamat_gudang',
    warna_gudang: 'warna_gudang'
  };

  export type Lokasi_gudangScalarFieldEnum = (typeof Lokasi_gudangScalarFieldEnum)[keyof typeof Lokasi_gudangScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama_produk: 'nama_produk',
    kategoriId: 'kategoriId',
    vendorsId: 'vendorsId',
    jumlah: 'jumlah',
    lokasiId: 'lokasiId',
    gambar_produk: 'gambar_produk',
    is_delete: 'is_delete',
    public_id: 'public_id'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const Barang_masukScalarFieldEnum: {
    id: 'id',
    produkId: 'produkId',
    tanggal_masuk: 'tanggal_masuk',
    nominal_modal: 'nominal_modal',
    jumlah_barang_masuk: 'jumlah_barang_masuk'
  };

  export type Barang_masukScalarFieldEnum = (typeof Barang_masukScalarFieldEnum)[keyof typeof Barang_masukScalarFieldEnum]


  export const Barang_keluarScalarFieldEnum: {
    id: 'id',
    produkId: 'produkId',
    tanggal_keluar: 'tanggal_keluar',
    nominal_modal: 'nominal_modal',
    jumlah_barang_keluar: 'jumlah_barang_keluar'
  };

  export type Barang_keluarScalarFieldEnum = (typeof Barang_keluarScalarFieldEnum)[keyof typeof Barang_keluarScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    email?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringNullableWithAggregatesFilter<"user"> | string | null
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
  }

  export type vendorsWhereInput = {
    AND?: vendorsWhereInput | vendorsWhereInput[]
    OR?: vendorsWhereInput[]
    NOT?: vendorsWhereInput | vendorsWhereInput[]
    id?: IntFilter<"vendors"> | number
    nama_vendor?: StringFilter<"vendors"> | string
    warna_vendor?: StringFilter<"vendors"> | string
    alamat_vendor?: StringFilter<"vendors"> | string
    produk?: ProdukListRelationFilter
  }

  export type vendorsOrderByWithRelationInput = {
    id?: SortOrder
    nama_vendor?: SortOrder
    warna_vendor?: SortOrder
    alamat_vendor?: SortOrder
    produk?: produkOrderByRelationAggregateInput
  }

  export type vendorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vendorsWhereInput | vendorsWhereInput[]
    OR?: vendorsWhereInput[]
    NOT?: vendorsWhereInput | vendorsWhereInput[]
    nama_vendor?: StringFilter<"vendors"> | string
    warna_vendor?: StringFilter<"vendors"> | string
    alamat_vendor?: StringFilter<"vendors"> | string
    produk?: ProdukListRelationFilter
  }, "id">

  export type vendorsOrderByWithAggregationInput = {
    id?: SortOrder
    nama_vendor?: SortOrder
    warna_vendor?: SortOrder
    alamat_vendor?: SortOrder
    _count?: vendorsCountOrderByAggregateInput
    _avg?: vendorsAvgOrderByAggregateInput
    _max?: vendorsMaxOrderByAggregateInput
    _min?: vendorsMinOrderByAggregateInput
    _sum?: vendorsSumOrderByAggregateInput
  }

  export type vendorsScalarWhereWithAggregatesInput = {
    AND?: vendorsScalarWhereWithAggregatesInput | vendorsScalarWhereWithAggregatesInput[]
    OR?: vendorsScalarWhereWithAggregatesInput[]
    NOT?: vendorsScalarWhereWithAggregatesInput | vendorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vendors"> | number
    nama_vendor?: StringWithAggregatesFilter<"vendors"> | string
    warna_vendor?: StringWithAggregatesFilter<"vendors"> | string
    alamat_vendor?: StringWithAggregatesFilter<"vendors"> | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    nama_kategori?: StringFilter<"category"> | string
    warna_category?: StringFilter<"category"> | string
    produk?: ProdukListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    warna_category?: SortOrder
    produk?: produkOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    nama_kategori?: StringFilter<"category"> | string
    warna_category?: StringFilter<"category"> | string
    produk?: ProdukListRelationFilter
  }, "id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    warna_category?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    nama_kategori?: StringWithAggregatesFilter<"category"> | string
    warna_category?: StringWithAggregatesFilter<"category"> | string
  }

  export type lokasi_gudangWhereInput = {
    AND?: lokasi_gudangWhereInput | lokasi_gudangWhereInput[]
    OR?: lokasi_gudangWhereInput[]
    NOT?: lokasi_gudangWhereInput | lokasi_gudangWhereInput[]
    id?: IntFilter<"lokasi_gudang"> | number
    nama_gudang?: StringFilter<"lokasi_gudang"> | string
    alamat_gudang?: StringFilter<"lokasi_gudang"> | string
    warna_gudang?: StringFilter<"lokasi_gudang"> | string
    produk?: ProdukListRelationFilter
  }

  export type lokasi_gudangOrderByWithRelationInput = {
    id?: SortOrder
    nama_gudang?: SortOrder
    alamat_gudang?: SortOrder
    warna_gudang?: SortOrder
    produk?: produkOrderByRelationAggregateInput
  }

  export type lokasi_gudangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: lokasi_gudangWhereInput | lokasi_gudangWhereInput[]
    OR?: lokasi_gudangWhereInput[]
    NOT?: lokasi_gudangWhereInput | lokasi_gudangWhereInput[]
    nama_gudang?: StringFilter<"lokasi_gudang"> | string
    alamat_gudang?: StringFilter<"lokasi_gudang"> | string
    warna_gudang?: StringFilter<"lokasi_gudang"> | string
    produk?: ProdukListRelationFilter
  }, "id">

  export type lokasi_gudangOrderByWithAggregationInput = {
    id?: SortOrder
    nama_gudang?: SortOrder
    alamat_gudang?: SortOrder
    warna_gudang?: SortOrder
    _count?: lokasi_gudangCountOrderByAggregateInput
    _avg?: lokasi_gudangAvgOrderByAggregateInput
    _max?: lokasi_gudangMaxOrderByAggregateInput
    _min?: lokasi_gudangMinOrderByAggregateInput
    _sum?: lokasi_gudangSumOrderByAggregateInput
  }

  export type lokasi_gudangScalarWhereWithAggregatesInput = {
    AND?: lokasi_gudangScalarWhereWithAggregatesInput | lokasi_gudangScalarWhereWithAggregatesInput[]
    OR?: lokasi_gudangScalarWhereWithAggregatesInput[]
    NOT?: lokasi_gudangScalarWhereWithAggregatesInput | lokasi_gudangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"lokasi_gudang"> | number
    nama_gudang?: StringWithAggregatesFilter<"lokasi_gudang"> | string
    alamat_gudang?: StringWithAggregatesFilter<"lokasi_gudang"> | string
    warna_gudang?: StringWithAggregatesFilter<"lokasi_gudang"> | string
  }

  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id?: IntFilter<"produk"> | number
    nama_produk?: StringFilter<"produk"> | string
    kategoriId?: IntFilter<"produk"> | number
    vendorsId?: IntFilter<"produk"> | number
    jumlah?: IntFilter<"produk"> | number
    lokasiId?: IntFilter<"produk"> | number
    gambar_produk?: StringNullableFilter<"produk"> | string | null
    is_delete?: BoolFilter<"produk"> | boolean
    public_id?: StringNullableFilter<"produk"> | string | null
    outbound?: Barang_keluarListRelationFilter
    inbound?: Barang_masukListRelationFilter
    kategori?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    lokasi?: XOR<Lokasi_gudangScalarRelationFilter, lokasi_gudangWhereInput>
    vendors?: XOR<VendorsScalarRelationFilter, vendorsWhereInput>
  }

  export type produkOrderByWithRelationInput = {
    id?: SortOrder
    nama_produk?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
    gambar_produk?: SortOrderInput | SortOrder
    is_delete?: SortOrder
    public_id?: SortOrderInput | SortOrder
    outbound?: barang_keluarOrderByRelationAggregateInput
    inbound?: barang_masukOrderByRelationAggregateInput
    kategori?: categoryOrderByWithRelationInput
    lokasi?: lokasi_gudangOrderByWithRelationInput
    vendors?: vendorsOrderByWithRelationInput
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    nama_produk?: StringFilter<"produk"> | string
    kategoriId?: IntFilter<"produk"> | number
    vendorsId?: IntFilter<"produk"> | number
    jumlah?: IntFilter<"produk"> | number
    lokasiId?: IntFilter<"produk"> | number
    gambar_produk?: StringNullableFilter<"produk"> | string | null
    is_delete?: BoolFilter<"produk"> | boolean
    public_id?: StringNullableFilter<"produk"> | string | null
    outbound?: Barang_keluarListRelationFilter
    inbound?: Barang_masukListRelationFilter
    kategori?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    lokasi?: XOR<Lokasi_gudangScalarRelationFilter, lokasi_gudangWhereInput>
    vendors?: XOR<VendorsScalarRelationFilter, vendorsWhereInput>
  }, "id">

  export type produkOrderByWithAggregationInput = {
    id?: SortOrder
    nama_produk?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
    gambar_produk?: SortOrderInput | SortOrder
    is_delete?: SortOrder
    public_id?: SortOrderInput | SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produk"> | number
    nama_produk?: StringWithAggregatesFilter<"produk"> | string
    kategoriId?: IntWithAggregatesFilter<"produk"> | number
    vendorsId?: IntWithAggregatesFilter<"produk"> | number
    jumlah?: IntWithAggregatesFilter<"produk"> | number
    lokasiId?: IntWithAggregatesFilter<"produk"> | number
    gambar_produk?: StringNullableWithAggregatesFilter<"produk"> | string | null
    is_delete?: BoolWithAggregatesFilter<"produk"> | boolean
    public_id?: StringNullableWithAggregatesFilter<"produk"> | string | null
  }

  export type barang_masukWhereInput = {
    AND?: barang_masukWhereInput | barang_masukWhereInput[]
    OR?: barang_masukWhereInput[]
    NOT?: barang_masukWhereInput | barang_masukWhereInput[]
    id?: IntFilter<"barang_masuk"> | number
    produkId?: IntFilter<"barang_masuk"> | number
    tanggal_masuk?: DateTimeFilter<"barang_masuk"> | Date | string
    nominal_modal?: IntFilter<"barang_masuk"> | number
    jumlah_barang_masuk?: IntFilter<"barang_masuk"> | number
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type barang_masukOrderByWithRelationInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_masuk?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
    produk?: produkOrderByWithRelationInput
  }

  export type barang_masukWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: barang_masukWhereInput | barang_masukWhereInput[]
    OR?: barang_masukWhereInput[]
    NOT?: barang_masukWhereInput | barang_masukWhereInput[]
    produkId?: IntFilter<"barang_masuk"> | number
    tanggal_masuk?: DateTimeFilter<"barang_masuk"> | Date | string
    nominal_modal?: IntFilter<"barang_masuk"> | number
    jumlah_barang_masuk?: IntFilter<"barang_masuk"> | number
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id">

  export type barang_masukOrderByWithAggregationInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_masuk?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
    _count?: barang_masukCountOrderByAggregateInput
    _avg?: barang_masukAvgOrderByAggregateInput
    _max?: barang_masukMaxOrderByAggregateInput
    _min?: barang_masukMinOrderByAggregateInput
    _sum?: barang_masukSumOrderByAggregateInput
  }

  export type barang_masukScalarWhereWithAggregatesInput = {
    AND?: barang_masukScalarWhereWithAggregatesInput | barang_masukScalarWhereWithAggregatesInput[]
    OR?: barang_masukScalarWhereWithAggregatesInput[]
    NOT?: barang_masukScalarWhereWithAggregatesInput | barang_masukScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"barang_masuk"> | number
    produkId?: IntWithAggregatesFilter<"barang_masuk"> | number
    tanggal_masuk?: DateTimeWithAggregatesFilter<"barang_masuk"> | Date | string
    nominal_modal?: IntWithAggregatesFilter<"barang_masuk"> | number
    jumlah_barang_masuk?: IntWithAggregatesFilter<"barang_masuk"> | number
  }

  export type barang_keluarWhereInput = {
    AND?: barang_keluarWhereInput | barang_keluarWhereInput[]
    OR?: barang_keluarWhereInput[]
    NOT?: barang_keluarWhereInput | barang_keluarWhereInput[]
    id?: IntFilter<"barang_keluar"> | number
    produkId?: IntFilter<"barang_keluar"> | number
    tanggal_keluar?: DateTimeFilter<"barang_keluar"> | Date | string
    nominal_modal?: IntFilter<"barang_keluar"> | number
    jumlah_barang_keluar?: IntFilter<"barang_keluar"> | number
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type barang_keluarOrderByWithRelationInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_keluar?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
    produk?: produkOrderByWithRelationInput
  }

  export type barang_keluarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: barang_keluarWhereInput | barang_keluarWhereInput[]
    OR?: barang_keluarWhereInput[]
    NOT?: barang_keluarWhereInput | barang_keluarWhereInput[]
    produkId?: IntFilter<"barang_keluar"> | number
    tanggal_keluar?: DateTimeFilter<"barang_keluar"> | Date | string
    nominal_modal?: IntFilter<"barang_keluar"> | number
    jumlah_barang_keluar?: IntFilter<"barang_keluar"> | number
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id">

  export type barang_keluarOrderByWithAggregationInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_keluar?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
    _count?: barang_keluarCountOrderByAggregateInput
    _avg?: barang_keluarAvgOrderByAggregateInput
    _max?: barang_keluarMaxOrderByAggregateInput
    _min?: barang_keluarMinOrderByAggregateInput
    _sum?: barang_keluarSumOrderByAggregateInput
  }

  export type barang_keluarScalarWhereWithAggregatesInput = {
    AND?: barang_keluarScalarWhereWithAggregatesInput | barang_keluarScalarWhereWithAggregatesInput[]
    OR?: barang_keluarScalarWhereWithAggregatesInput[]
    NOT?: barang_keluarScalarWhereWithAggregatesInput | barang_keluarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"barang_keluar"> | number
    produkId?: IntWithAggregatesFilter<"barang_keluar"> | number
    tanggal_keluar?: DateTimeWithAggregatesFilter<"barang_keluar"> | Date | string
    nominal_modal?: IntWithAggregatesFilter<"barang_keluar"> | number
    jumlah_barang_keluar?: IntWithAggregatesFilter<"barang_keluar"> | number
  }

  export type userCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password: string
    role: $Enums.Role
  }

  export type userUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    password: string
    role: $Enums.Role
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type userCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    password: string
    role: $Enums.Role
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type vendorsCreateInput = {
    nama_vendor: string
    warna_vendor: string
    alamat_vendor: string
    produk?: produkCreateNestedManyWithoutVendorsInput
  }

  export type vendorsUncheckedCreateInput = {
    id?: number
    nama_vendor: string
    warna_vendor: string
    alamat_vendor: string
    produk?: produkUncheckedCreateNestedManyWithoutVendorsInput
  }

  export type vendorsUpdateInput = {
    nama_vendor?: StringFieldUpdateOperationsInput | string
    warna_vendor?: StringFieldUpdateOperationsInput | string
    alamat_vendor?: StringFieldUpdateOperationsInput | string
    produk?: produkUpdateManyWithoutVendorsNestedInput
  }

  export type vendorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_vendor?: StringFieldUpdateOperationsInput | string
    warna_vendor?: StringFieldUpdateOperationsInput | string
    alamat_vendor?: StringFieldUpdateOperationsInput | string
    produk?: produkUncheckedUpdateManyWithoutVendorsNestedInput
  }

  export type vendorsCreateManyInput = {
    id?: number
    nama_vendor: string
    warna_vendor: string
    alamat_vendor: string
  }

  export type vendorsUpdateManyMutationInput = {
    nama_vendor?: StringFieldUpdateOperationsInput | string
    warna_vendor?: StringFieldUpdateOperationsInput | string
    alamat_vendor?: StringFieldUpdateOperationsInput | string
  }

  export type vendorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_vendor?: StringFieldUpdateOperationsInput | string
    warna_vendor?: StringFieldUpdateOperationsInput | string
    alamat_vendor?: StringFieldUpdateOperationsInput | string
  }

  export type categoryCreateInput = {
    nama_kategori: string
    warna_category: string
    produk?: produkCreateNestedManyWithoutKategoriInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    nama_kategori: string
    warna_category: string
    produk?: produkUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type categoryUpdateInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    warna_category?: StringFieldUpdateOperationsInput | string
    produk?: produkUpdateManyWithoutKategoriNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    warna_category?: StringFieldUpdateOperationsInput | string
    produk?: produkUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    nama_kategori: string
    warna_category: string
  }

  export type categoryUpdateManyMutationInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    warna_category?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    warna_category?: StringFieldUpdateOperationsInput | string
  }

  export type lokasi_gudangCreateInput = {
    nama_gudang: string
    alamat_gudang: string
    warna_gudang: string
    produk?: produkCreateNestedManyWithoutLokasiInput
  }

  export type lokasi_gudangUncheckedCreateInput = {
    id?: number
    nama_gudang: string
    alamat_gudang: string
    warna_gudang: string
    produk?: produkUncheckedCreateNestedManyWithoutLokasiInput
  }

  export type lokasi_gudangUpdateInput = {
    nama_gudang?: StringFieldUpdateOperationsInput | string
    alamat_gudang?: StringFieldUpdateOperationsInput | string
    warna_gudang?: StringFieldUpdateOperationsInput | string
    produk?: produkUpdateManyWithoutLokasiNestedInput
  }

  export type lokasi_gudangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_gudang?: StringFieldUpdateOperationsInput | string
    alamat_gudang?: StringFieldUpdateOperationsInput | string
    warna_gudang?: StringFieldUpdateOperationsInput | string
    produk?: produkUncheckedUpdateManyWithoutLokasiNestedInput
  }

  export type lokasi_gudangCreateManyInput = {
    id?: number
    nama_gudang: string
    alamat_gudang: string
    warna_gudang: string
  }

  export type lokasi_gudangUpdateManyMutationInput = {
    nama_gudang?: StringFieldUpdateOperationsInput | string
    alamat_gudang?: StringFieldUpdateOperationsInput | string
    warna_gudang?: StringFieldUpdateOperationsInput | string
  }

  export type lokasi_gudangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_gudang?: StringFieldUpdateOperationsInput | string
    alamat_gudang?: StringFieldUpdateOperationsInput | string
    warna_gudang?: StringFieldUpdateOperationsInput | string
  }

  export type produkCreateInput = {
    nama_produk: string
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarCreateNestedManyWithoutProdukInput
    inbound?: barang_masukCreateNestedManyWithoutProdukInput
    kategori: categoryCreateNestedOneWithoutProdukInput
    lokasi: lokasi_gudangCreateNestedOneWithoutProdukInput
    vendors: vendorsCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarUncheckedCreateNestedManyWithoutProdukInput
    inbound?: barang_masukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkUpdateInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUpdateManyWithoutProdukNestedInput
    kategori?: categoryUpdateOneRequiredWithoutProdukNestedInput
    lokasi?: lokasi_gudangUpdateOneRequiredWithoutProdukNestedInput
    vendors?: vendorsUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUncheckedUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
  }

  export type produkUpdateManyMutationInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type barang_masukCreateInput = {
    tanggal_masuk?: Date | string
    nominal_modal: number
    jumlah_barang_masuk: number
    produk: produkCreateNestedOneWithoutInboundInput
  }

  export type barang_masukUncheckedCreateInput = {
    id?: number
    produkId: number
    tanggal_masuk?: Date | string
    nominal_modal: number
    jumlah_barang_masuk: number
  }

  export type barang_masukUpdateInput = {
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
    produk?: produkUpdateOneRequiredWithoutInboundNestedInput
  }

  export type barang_masukUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
  }

  export type barang_masukCreateManyInput = {
    id?: number
    produkId: number
    tanggal_masuk?: Date | string
    nominal_modal: number
    jumlah_barang_masuk: number
  }

  export type barang_masukUpdateManyMutationInput = {
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
  }

  export type barang_masukUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
  }

  export type barang_keluarCreateInput = {
    tanggal_keluar?: Date | string
    nominal_modal: number
    jumlah_barang_keluar: number
    produk: produkCreateNestedOneWithoutOutboundInput
  }

  export type barang_keluarUncheckedCreateInput = {
    id?: number
    produkId: number
    tanggal_keluar?: Date | string
    nominal_modal: number
    jumlah_barang_keluar: number
  }

  export type barang_keluarUpdateInput = {
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
    produk?: produkUpdateOneRequiredWithoutOutboundNestedInput
  }

  export type barang_keluarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
  }

  export type barang_keluarCreateManyInput = {
    id?: number
    produkId: number
    tanggal_keluar?: Date | string
    nominal_modal: number
    jumlah_barang_keluar: number
  }

  export type barang_keluarUpdateManyMutationInput = {
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
  }

  export type barang_keluarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    produkId?: IntFieldUpdateOperationsInput | number
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProdukListRelationFilter = {
    every?: produkWhereInput
    some?: produkWhereInput
    none?: produkWhereInput
  }

  export type produkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vendorsCountOrderByAggregateInput = {
    id?: SortOrder
    nama_vendor?: SortOrder
    warna_vendor?: SortOrder
    alamat_vendor?: SortOrder
  }

  export type vendorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type vendorsMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_vendor?: SortOrder
    warna_vendor?: SortOrder
    alamat_vendor?: SortOrder
  }

  export type vendorsMinOrderByAggregateInput = {
    id?: SortOrder
    nama_vendor?: SortOrder
    warna_vendor?: SortOrder
    alamat_vendor?: SortOrder
  }

  export type vendorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    warna_category?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    warna_category?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    nama_kategori?: SortOrder
    warna_category?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lokasi_gudangCountOrderByAggregateInput = {
    id?: SortOrder
    nama_gudang?: SortOrder
    alamat_gudang?: SortOrder
    warna_gudang?: SortOrder
  }

  export type lokasi_gudangAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type lokasi_gudangMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_gudang?: SortOrder
    alamat_gudang?: SortOrder
    warna_gudang?: SortOrder
  }

  export type lokasi_gudangMinOrderByAggregateInput = {
    id?: SortOrder
    nama_gudang?: SortOrder
    alamat_gudang?: SortOrder
    warna_gudang?: SortOrder
  }

  export type lokasi_gudangSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Barang_keluarListRelationFilter = {
    every?: barang_keluarWhereInput
    some?: barang_keluarWhereInput
    none?: barang_keluarWhereInput
  }

  export type Barang_masukListRelationFilter = {
    every?: barang_masukWhereInput
    some?: barang_masukWhereInput
    none?: barang_masukWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type Lokasi_gudangScalarRelationFilter = {
    is?: lokasi_gudangWhereInput
    isNot?: lokasi_gudangWhereInput
  }

  export type VendorsScalarRelationFilter = {
    is?: vendorsWhereInput
    isNot?: vendorsWhereInput
  }

  export type barang_keluarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type barang_masukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkCountOrderByAggregateInput = {
    id?: SortOrder
    nama_produk?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
    gambar_produk?: SortOrder
    is_delete?: SortOrder
    public_id?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_produk?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
    gambar_produk?: SortOrder
    is_delete?: SortOrder
    public_id?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id?: SortOrder
    nama_produk?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
    gambar_produk?: SortOrder
    is_delete?: SortOrder
    public_id?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    id?: SortOrder
    kategoriId?: SortOrder
    vendorsId?: SortOrder
    jumlah?: SortOrder
    lokasiId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProdukScalarRelationFilter = {
    is?: produkWhereInput
    isNot?: produkWhereInput
  }

  export type barang_masukCountOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_masuk?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
  }

  export type barang_masukAvgOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
  }

  export type barang_masukMaxOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_masuk?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
  }

  export type barang_masukMinOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_masuk?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
  }

  export type barang_masukSumOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_masuk?: SortOrder
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

  export type barang_keluarCountOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_keluar?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
  }

  export type barang_keluarAvgOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
  }

  export type barang_keluarMaxOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_keluar?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
  }

  export type barang_keluarMinOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    tanggal_keluar?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
  }

  export type barang_keluarSumOrderByAggregateInput = {
    id?: SortOrder
    produkId?: SortOrder
    nominal_modal?: SortOrder
    jumlah_barang_keluar?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type produkCreateNestedManyWithoutVendorsInput = {
    create?: XOR<produkCreateWithoutVendorsInput, produkUncheckedCreateWithoutVendorsInput> | produkCreateWithoutVendorsInput[] | produkUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: produkCreateOrConnectWithoutVendorsInput | produkCreateOrConnectWithoutVendorsInput[]
    createMany?: produkCreateManyVendorsInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUncheckedCreateNestedManyWithoutVendorsInput = {
    create?: XOR<produkCreateWithoutVendorsInput, produkUncheckedCreateWithoutVendorsInput> | produkCreateWithoutVendorsInput[] | produkUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: produkCreateOrConnectWithoutVendorsInput | produkCreateOrConnectWithoutVendorsInput[]
    createMany?: produkCreateManyVendorsInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUpdateManyWithoutVendorsNestedInput = {
    create?: XOR<produkCreateWithoutVendorsInput, produkUncheckedCreateWithoutVendorsInput> | produkCreateWithoutVendorsInput[] | produkUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: produkCreateOrConnectWithoutVendorsInput | produkCreateOrConnectWithoutVendorsInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutVendorsInput | produkUpsertWithWhereUniqueWithoutVendorsInput[]
    createMany?: produkCreateManyVendorsInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutVendorsInput | produkUpdateWithWhereUniqueWithoutVendorsInput[]
    updateMany?: produkUpdateManyWithWhereWithoutVendorsInput | produkUpdateManyWithWhereWithoutVendorsInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type produkUncheckedUpdateManyWithoutVendorsNestedInput = {
    create?: XOR<produkCreateWithoutVendorsInput, produkUncheckedCreateWithoutVendorsInput> | produkCreateWithoutVendorsInput[] | produkUncheckedCreateWithoutVendorsInput[]
    connectOrCreate?: produkCreateOrConnectWithoutVendorsInput | produkCreateOrConnectWithoutVendorsInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutVendorsInput | produkUpsertWithWhereUniqueWithoutVendorsInput[]
    createMany?: produkCreateManyVendorsInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutVendorsInput | produkUpdateWithWhereUniqueWithoutVendorsInput[]
    updateMany?: produkUpdateManyWithWhereWithoutVendorsInput | produkUpdateManyWithWhereWithoutVendorsInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type produkCreateNestedManyWithoutKategoriInput = {
    create?: XOR<produkCreateWithoutKategoriInput, produkUncheckedCreateWithoutKategoriInput> | produkCreateWithoutKategoriInput[] | produkUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: produkCreateOrConnectWithoutKategoriInput | produkCreateOrConnectWithoutKategoriInput[]
    createMany?: produkCreateManyKategoriInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<produkCreateWithoutKategoriInput, produkUncheckedCreateWithoutKategoriInput> | produkCreateWithoutKategoriInput[] | produkUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: produkCreateOrConnectWithoutKategoriInput | produkCreateOrConnectWithoutKategoriInput[]
    createMany?: produkCreateManyKategoriInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<produkCreateWithoutKategoriInput, produkUncheckedCreateWithoutKategoriInput> | produkCreateWithoutKategoriInput[] | produkUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: produkCreateOrConnectWithoutKategoriInput | produkCreateOrConnectWithoutKategoriInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutKategoriInput | produkUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: produkCreateManyKategoriInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutKategoriInput | produkUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: produkUpdateManyWithWhereWithoutKategoriInput | produkUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type produkUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<produkCreateWithoutKategoriInput, produkUncheckedCreateWithoutKategoriInput> | produkCreateWithoutKategoriInput[] | produkUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: produkCreateOrConnectWithoutKategoriInput | produkCreateOrConnectWithoutKategoriInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutKategoriInput | produkUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: produkCreateManyKategoriInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutKategoriInput | produkUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: produkUpdateManyWithWhereWithoutKategoriInput | produkUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type produkCreateNestedManyWithoutLokasiInput = {
    create?: XOR<produkCreateWithoutLokasiInput, produkUncheckedCreateWithoutLokasiInput> | produkCreateWithoutLokasiInput[] | produkUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: produkCreateOrConnectWithoutLokasiInput | produkCreateOrConnectWithoutLokasiInput[]
    createMany?: produkCreateManyLokasiInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUncheckedCreateNestedManyWithoutLokasiInput = {
    create?: XOR<produkCreateWithoutLokasiInput, produkUncheckedCreateWithoutLokasiInput> | produkCreateWithoutLokasiInput[] | produkUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: produkCreateOrConnectWithoutLokasiInput | produkCreateOrConnectWithoutLokasiInput[]
    createMany?: produkCreateManyLokasiInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<produkCreateWithoutLokasiInput, produkUncheckedCreateWithoutLokasiInput> | produkCreateWithoutLokasiInput[] | produkUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: produkCreateOrConnectWithoutLokasiInput | produkCreateOrConnectWithoutLokasiInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutLokasiInput | produkUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: produkCreateManyLokasiInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutLokasiInput | produkUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: produkUpdateManyWithWhereWithoutLokasiInput | produkUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type produkUncheckedUpdateManyWithoutLokasiNestedInput = {
    create?: XOR<produkCreateWithoutLokasiInput, produkUncheckedCreateWithoutLokasiInput> | produkCreateWithoutLokasiInput[] | produkUncheckedCreateWithoutLokasiInput[]
    connectOrCreate?: produkCreateOrConnectWithoutLokasiInput | produkCreateOrConnectWithoutLokasiInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutLokasiInput | produkUpsertWithWhereUniqueWithoutLokasiInput[]
    createMany?: produkCreateManyLokasiInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutLokasiInput | produkUpdateWithWhereUniqueWithoutLokasiInput[]
    updateMany?: produkUpdateManyWithWhereWithoutLokasiInput | produkUpdateManyWithWhereWithoutLokasiInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type barang_keluarCreateNestedManyWithoutProdukInput = {
    create?: XOR<barang_keluarCreateWithoutProdukInput, barang_keluarUncheckedCreateWithoutProdukInput> | barang_keluarCreateWithoutProdukInput[] | barang_keluarUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_keluarCreateOrConnectWithoutProdukInput | barang_keluarCreateOrConnectWithoutProdukInput[]
    createMany?: barang_keluarCreateManyProdukInputEnvelope
    connect?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
  }

  export type barang_masukCreateNestedManyWithoutProdukInput = {
    create?: XOR<barang_masukCreateWithoutProdukInput, barang_masukUncheckedCreateWithoutProdukInput> | barang_masukCreateWithoutProdukInput[] | barang_masukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_masukCreateOrConnectWithoutProdukInput | barang_masukCreateOrConnectWithoutProdukInput[]
    createMany?: barang_masukCreateManyProdukInputEnvelope
    connect?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
  }

  export type categoryCreateNestedOneWithoutProdukInput = {
    create?: XOR<categoryCreateWithoutProdukInput, categoryUncheckedCreateWithoutProdukInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProdukInput
    connect?: categoryWhereUniqueInput
  }

  export type lokasi_gudangCreateNestedOneWithoutProdukInput = {
    create?: XOR<lokasi_gudangCreateWithoutProdukInput, lokasi_gudangUncheckedCreateWithoutProdukInput>
    connectOrCreate?: lokasi_gudangCreateOrConnectWithoutProdukInput
    connect?: lokasi_gudangWhereUniqueInput
  }

  export type vendorsCreateNestedOneWithoutProdukInput = {
    create?: XOR<vendorsCreateWithoutProdukInput, vendorsUncheckedCreateWithoutProdukInput>
    connectOrCreate?: vendorsCreateOrConnectWithoutProdukInput
    connect?: vendorsWhereUniqueInput
  }

  export type barang_keluarUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<barang_keluarCreateWithoutProdukInput, barang_keluarUncheckedCreateWithoutProdukInput> | barang_keluarCreateWithoutProdukInput[] | barang_keluarUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_keluarCreateOrConnectWithoutProdukInput | barang_keluarCreateOrConnectWithoutProdukInput[]
    createMany?: barang_keluarCreateManyProdukInputEnvelope
    connect?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
  }

  export type barang_masukUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<barang_masukCreateWithoutProdukInput, barang_masukUncheckedCreateWithoutProdukInput> | barang_masukCreateWithoutProdukInput[] | barang_masukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_masukCreateOrConnectWithoutProdukInput | barang_masukCreateOrConnectWithoutProdukInput[]
    createMany?: barang_masukCreateManyProdukInputEnvelope
    connect?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type barang_keluarUpdateManyWithoutProdukNestedInput = {
    create?: XOR<barang_keluarCreateWithoutProdukInput, barang_keluarUncheckedCreateWithoutProdukInput> | barang_keluarCreateWithoutProdukInput[] | barang_keluarUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_keluarCreateOrConnectWithoutProdukInput | barang_keluarCreateOrConnectWithoutProdukInput[]
    upsert?: barang_keluarUpsertWithWhereUniqueWithoutProdukInput | barang_keluarUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: barang_keluarCreateManyProdukInputEnvelope
    set?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    disconnect?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    delete?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    connect?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    update?: barang_keluarUpdateWithWhereUniqueWithoutProdukInput | barang_keluarUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: barang_keluarUpdateManyWithWhereWithoutProdukInput | barang_keluarUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: barang_keluarScalarWhereInput | barang_keluarScalarWhereInput[]
  }

  export type barang_masukUpdateManyWithoutProdukNestedInput = {
    create?: XOR<barang_masukCreateWithoutProdukInput, barang_masukUncheckedCreateWithoutProdukInput> | barang_masukCreateWithoutProdukInput[] | barang_masukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_masukCreateOrConnectWithoutProdukInput | barang_masukCreateOrConnectWithoutProdukInput[]
    upsert?: barang_masukUpsertWithWhereUniqueWithoutProdukInput | barang_masukUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: barang_masukCreateManyProdukInputEnvelope
    set?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    disconnect?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    delete?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    connect?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    update?: barang_masukUpdateWithWhereUniqueWithoutProdukInput | barang_masukUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: barang_masukUpdateManyWithWhereWithoutProdukInput | barang_masukUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: barang_masukScalarWhereInput | barang_masukScalarWhereInput[]
  }

  export type categoryUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<categoryCreateWithoutProdukInput, categoryUncheckedCreateWithoutProdukInput>
    connectOrCreate?: categoryCreateOrConnectWithoutProdukInput
    upsert?: categoryUpsertWithoutProdukInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutProdukInput, categoryUpdateWithoutProdukInput>, categoryUncheckedUpdateWithoutProdukInput>
  }

  export type lokasi_gudangUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<lokasi_gudangCreateWithoutProdukInput, lokasi_gudangUncheckedCreateWithoutProdukInput>
    connectOrCreate?: lokasi_gudangCreateOrConnectWithoutProdukInput
    upsert?: lokasi_gudangUpsertWithoutProdukInput
    connect?: lokasi_gudangWhereUniqueInput
    update?: XOR<XOR<lokasi_gudangUpdateToOneWithWhereWithoutProdukInput, lokasi_gudangUpdateWithoutProdukInput>, lokasi_gudangUncheckedUpdateWithoutProdukInput>
  }

  export type vendorsUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<vendorsCreateWithoutProdukInput, vendorsUncheckedCreateWithoutProdukInput>
    connectOrCreate?: vendorsCreateOrConnectWithoutProdukInput
    upsert?: vendorsUpsertWithoutProdukInput
    connect?: vendorsWhereUniqueInput
    update?: XOR<XOR<vendorsUpdateToOneWithWhereWithoutProdukInput, vendorsUpdateWithoutProdukInput>, vendorsUncheckedUpdateWithoutProdukInput>
  }

  export type barang_keluarUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<barang_keluarCreateWithoutProdukInput, barang_keluarUncheckedCreateWithoutProdukInput> | barang_keluarCreateWithoutProdukInput[] | barang_keluarUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_keluarCreateOrConnectWithoutProdukInput | barang_keluarCreateOrConnectWithoutProdukInput[]
    upsert?: barang_keluarUpsertWithWhereUniqueWithoutProdukInput | barang_keluarUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: barang_keluarCreateManyProdukInputEnvelope
    set?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    disconnect?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    delete?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    connect?: barang_keluarWhereUniqueInput | barang_keluarWhereUniqueInput[]
    update?: barang_keluarUpdateWithWhereUniqueWithoutProdukInput | barang_keluarUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: barang_keluarUpdateManyWithWhereWithoutProdukInput | barang_keluarUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: barang_keluarScalarWhereInput | barang_keluarScalarWhereInput[]
  }

  export type barang_masukUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<barang_masukCreateWithoutProdukInput, barang_masukUncheckedCreateWithoutProdukInput> | barang_masukCreateWithoutProdukInput[] | barang_masukUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: barang_masukCreateOrConnectWithoutProdukInput | barang_masukCreateOrConnectWithoutProdukInput[]
    upsert?: barang_masukUpsertWithWhereUniqueWithoutProdukInput | barang_masukUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: barang_masukCreateManyProdukInputEnvelope
    set?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    disconnect?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    delete?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    connect?: barang_masukWhereUniqueInput | barang_masukWhereUniqueInput[]
    update?: barang_masukUpdateWithWhereUniqueWithoutProdukInput | barang_masukUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: barang_masukUpdateManyWithWhereWithoutProdukInput | barang_masukUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: barang_masukScalarWhereInput | barang_masukScalarWhereInput[]
  }

  export type produkCreateNestedOneWithoutInboundInput = {
    create?: XOR<produkCreateWithoutInboundInput, produkUncheckedCreateWithoutInboundInput>
    connectOrCreate?: produkCreateOrConnectWithoutInboundInput
    connect?: produkWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type produkUpdateOneRequiredWithoutInboundNestedInput = {
    create?: XOR<produkCreateWithoutInboundInput, produkUncheckedCreateWithoutInboundInput>
    connectOrCreate?: produkCreateOrConnectWithoutInboundInput
    upsert?: produkUpsertWithoutInboundInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutInboundInput, produkUpdateWithoutInboundInput>, produkUncheckedUpdateWithoutInboundInput>
  }

  export type produkCreateNestedOneWithoutOutboundInput = {
    create?: XOR<produkCreateWithoutOutboundInput, produkUncheckedCreateWithoutOutboundInput>
    connectOrCreate?: produkCreateOrConnectWithoutOutboundInput
    connect?: produkWhereUniqueInput
  }

  export type produkUpdateOneRequiredWithoutOutboundNestedInput = {
    create?: XOR<produkCreateWithoutOutboundInput, produkUncheckedCreateWithoutOutboundInput>
    connectOrCreate?: produkCreateOrConnectWithoutOutboundInput
    upsert?: produkUpsertWithoutOutboundInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutOutboundInput, produkUpdateWithoutOutboundInput>, produkUncheckedUpdateWithoutOutboundInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type produkCreateWithoutVendorsInput = {
    nama_produk: string
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarCreateNestedManyWithoutProdukInput
    inbound?: barang_masukCreateNestedManyWithoutProdukInput
    kategori: categoryCreateNestedOneWithoutProdukInput
    lokasi: lokasi_gudangCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutVendorsInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarUncheckedCreateNestedManyWithoutProdukInput
    inbound?: barang_masukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutVendorsInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutVendorsInput, produkUncheckedCreateWithoutVendorsInput>
  }

  export type produkCreateManyVendorsInputEnvelope = {
    data: produkCreateManyVendorsInput | produkCreateManyVendorsInput[]
    skipDuplicates?: boolean
  }

  export type produkUpsertWithWhereUniqueWithoutVendorsInput = {
    where: produkWhereUniqueInput
    update: XOR<produkUpdateWithoutVendorsInput, produkUncheckedUpdateWithoutVendorsInput>
    create: XOR<produkCreateWithoutVendorsInput, produkUncheckedCreateWithoutVendorsInput>
  }

  export type produkUpdateWithWhereUniqueWithoutVendorsInput = {
    where: produkWhereUniqueInput
    data: XOR<produkUpdateWithoutVendorsInput, produkUncheckedUpdateWithoutVendorsInput>
  }

  export type produkUpdateManyWithWhereWithoutVendorsInput = {
    where: produkScalarWhereInput
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyWithoutVendorsInput>
  }

  export type produkScalarWhereInput = {
    AND?: produkScalarWhereInput | produkScalarWhereInput[]
    OR?: produkScalarWhereInput[]
    NOT?: produkScalarWhereInput | produkScalarWhereInput[]
    id?: IntFilter<"produk"> | number
    nama_produk?: StringFilter<"produk"> | string
    kategoriId?: IntFilter<"produk"> | number
    vendorsId?: IntFilter<"produk"> | number
    jumlah?: IntFilter<"produk"> | number
    lokasiId?: IntFilter<"produk"> | number
    gambar_produk?: StringNullableFilter<"produk"> | string | null
    is_delete?: BoolFilter<"produk"> | boolean
    public_id?: StringNullableFilter<"produk"> | string | null
  }

  export type produkCreateWithoutKategoriInput = {
    nama_produk: string
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarCreateNestedManyWithoutProdukInput
    inbound?: barang_masukCreateNestedManyWithoutProdukInput
    lokasi: lokasi_gudangCreateNestedOneWithoutProdukInput
    vendors: vendorsCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutKategoriInput = {
    id?: number
    nama_produk: string
    vendorsId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarUncheckedCreateNestedManyWithoutProdukInput
    inbound?: barang_masukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutKategoriInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutKategoriInput, produkUncheckedCreateWithoutKategoriInput>
  }

  export type produkCreateManyKategoriInputEnvelope = {
    data: produkCreateManyKategoriInput | produkCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type produkUpsertWithWhereUniqueWithoutKategoriInput = {
    where: produkWhereUniqueInput
    update: XOR<produkUpdateWithoutKategoriInput, produkUncheckedUpdateWithoutKategoriInput>
    create: XOR<produkCreateWithoutKategoriInput, produkUncheckedCreateWithoutKategoriInput>
  }

  export type produkUpdateWithWhereUniqueWithoutKategoriInput = {
    where: produkWhereUniqueInput
    data: XOR<produkUpdateWithoutKategoriInput, produkUncheckedUpdateWithoutKategoriInput>
  }

  export type produkUpdateManyWithWhereWithoutKategoriInput = {
    where: produkScalarWhereInput
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyWithoutKategoriInput>
  }

  export type produkCreateWithoutLokasiInput = {
    nama_produk: string
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarCreateNestedManyWithoutProdukInput
    inbound?: barang_masukCreateNestedManyWithoutProdukInput
    kategori: categoryCreateNestedOneWithoutProdukInput
    vendors: vendorsCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutLokasiInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarUncheckedCreateNestedManyWithoutProdukInput
    inbound?: barang_masukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutLokasiInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutLokasiInput, produkUncheckedCreateWithoutLokasiInput>
  }

  export type produkCreateManyLokasiInputEnvelope = {
    data: produkCreateManyLokasiInput | produkCreateManyLokasiInput[]
    skipDuplicates?: boolean
  }

  export type produkUpsertWithWhereUniqueWithoutLokasiInput = {
    where: produkWhereUniqueInput
    update: XOR<produkUpdateWithoutLokasiInput, produkUncheckedUpdateWithoutLokasiInput>
    create: XOR<produkCreateWithoutLokasiInput, produkUncheckedCreateWithoutLokasiInput>
  }

  export type produkUpdateWithWhereUniqueWithoutLokasiInput = {
    where: produkWhereUniqueInput
    data: XOR<produkUpdateWithoutLokasiInput, produkUncheckedUpdateWithoutLokasiInput>
  }

  export type produkUpdateManyWithWhereWithoutLokasiInput = {
    where: produkScalarWhereInput
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyWithoutLokasiInput>
  }

  export type barang_keluarCreateWithoutProdukInput = {
    tanggal_keluar?: Date | string
    nominal_modal: number
    jumlah_barang_keluar: number
  }

  export type barang_keluarUncheckedCreateWithoutProdukInput = {
    id?: number
    tanggal_keluar?: Date | string
    nominal_modal: number
    jumlah_barang_keluar: number
  }

  export type barang_keluarCreateOrConnectWithoutProdukInput = {
    where: barang_keluarWhereUniqueInput
    create: XOR<barang_keluarCreateWithoutProdukInput, barang_keluarUncheckedCreateWithoutProdukInput>
  }

  export type barang_keluarCreateManyProdukInputEnvelope = {
    data: barang_keluarCreateManyProdukInput | barang_keluarCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type barang_masukCreateWithoutProdukInput = {
    tanggal_masuk?: Date | string
    nominal_modal: number
    jumlah_barang_masuk: number
  }

  export type barang_masukUncheckedCreateWithoutProdukInput = {
    id?: number
    tanggal_masuk?: Date | string
    nominal_modal: number
    jumlah_barang_masuk: number
  }

  export type barang_masukCreateOrConnectWithoutProdukInput = {
    where: barang_masukWhereUniqueInput
    create: XOR<barang_masukCreateWithoutProdukInput, barang_masukUncheckedCreateWithoutProdukInput>
  }

  export type barang_masukCreateManyProdukInputEnvelope = {
    data: barang_masukCreateManyProdukInput | barang_masukCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutProdukInput = {
    nama_kategori: string
    warna_category: string
  }

  export type categoryUncheckedCreateWithoutProdukInput = {
    id?: number
    nama_kategori: string
    warna_category: string
  }

  export type categoryCreateOrConnectWithoutProdukInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProdukInput, categoryUncheckedCreateWithoutProdukInput>
  }

  export type lokasi_gudangCreateWithoutProdukInput = {
    nama_gudang: string
    alamat_gudang: string
    warna_gudang: string
  }

  export type lokasi_gudangUncheckedCreateWithoutProdukInput = {
    id?: number
    nama_gudang: string
    alamat_gudang: string
    warna_gudang: string
  }

  export type lokasi_gudangCreateOrConnectWithoutProdukInput = {
    where: lokasi_gudangWhereUniqueInput
    create: XOR<lokasi_gudangCreateWithoutProdukInput, lokasi_gudangUncheckedCreateWithoutProdukInput>
  }

  export type vendorsCreateWithoutProdukInput = {
    nama_vendor: string
    warna_vendor: string
    alamat_vendor: string
  }

  export type vendorsUncheckedCreateWithoutProdukInput = {
    id?: number
    nama_vendor: string
    warna_vendor: string
    alamat_vendor: string
  }

  export type vendorsCreateOrConnectWithoutProdukInput = {
    where: vendorsWhereUniqueInput
    create: XOR<vendorsCreateWithoutProdukInput, vendorsUncheckedCreateWithoutProdukInput>
  }

  export type barang_keluarUpsertWithWhereUniqueWithoutProdukInput = {
    where: barang_keluarWhereUniqueInput
    update: XOR<barang_keluarUpdateWithoutProdukInput, barang_keluarUncheckedUpdateWithoutProdukInput>
    create: XOR<barang_keluarCreateWithoutProdukInput, barang_keluarUncheckedCreateWithoutProdukInput>
  }

  export type barang_keluarUpdateWithWhereUniqueWithoutProdukInput = {
    where: barang_keluarWhereUniqueInput
    data: XOR<barang_keluarUpdateWithoutProdukInput, barang_keluarUncheckedUpdateWithoutProdukInput>
  }

  export type barang_keluarUpdateManyWithWhereWithoutProdukInput = {
    where: barang_keluarScalarWhereInput
    data: XOR<barang_keluarUpdateManyMutationInput, barang_keluarUncheckedUpdateManyWithoutProdukInput>
  }

  export type barang_keluarScalarWhereInput = {
    AND?: barang_keluarScalarWhereInput | barang_keluarScalarWhereInput[]
    OR?: barang_keluarScalarWhereInput[]
    NOT?: barang_keluarScalarWhereInput | barang_keluarScalarWhereInput[]
    id?: IntFilter<"barang_keluar"> | number
    produkId?: IntFilter<"barang_keluar"> | number
    tanggal_keluar?: DateTimeFilter<"barang_keluar"> | Date | string
    nominal_modal?: IntFilter<"barang_keluar"> | number
    jumlah_barang_keluar?: IntFilter<"barang_keluar"> | number
  }

  export type barang_masukUpsertWithWhereUniqueWithoutProdukInput = {
    where: barang_masukWhereUniqueInput
    update: XOR<barang_masukUpdateWithoutProdukInput, barang_masukUncheckedUpdateWithoutProdukInput>
    create: XOR<barang_masukCreateWithoutProdukInput, barang_masukUncheckedCreateWithoutProdukInput>
  }

  export type barang_masukUpdateWithWhereUniqueWithoutProdukInput = {
    where: barang_masukWhereUniqueInput
    data: XOR<barang_masukUpdateWithoutProdukInput, barang_masukUncheckedUpdateWithoutProdukInput>
  }

  export type barang_masukUpdateManyWithWhereWithoutProdukInput = {
    where: barang_masukScalarWhereInput
    data: XOR<barang_masukUpdateManyMutationInput, barang_masukUncheckedUpdateManyWithoutProdukInput>
  }

  export type barang_masukScalarWhereInput = {
    AND?: barang_masukScalarWhereInput | barang_masukScalarWhereInput[]
    OR?: barang_masukScalarWhereInput[]
    NOT?: barang_masukScalarWhereInput | barang_masukScalarWhereInput[]
    id?: IntFilter<"barang_masuk"> | number
    produkId?: IntFilter<"barang_masuk"> | number
    tanggal_masuk?: DateTimeFilter<"barang_masuk"> | Date | string
    nominal_modal?: IntFilter<"barang_masuk"> | number
    jumlah_barang_masuk?: IntFilter<"barang_masuk"> | number
  }

  export type categoryUpsertWithoutProdukInput = {
    update: XOR<categoryUpdateWithoutProdukInput, categoryUncheckedUpdateWithoutProdukInput>
    create: XOR<categoryCreateWithoutProdukInput, categoryUncheckedCreateWithoutProdukInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutProdukInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutProdukInput, categoryUncheckedUpdateWithoutProdukInput>
  }

  export type categoryUpdateWithoutProdukInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    warna_category?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    warna_category?: StringFieldUpdateOperationsInput | string
  }

  export type lokasi_gudangUpsertWithoutProdukInput = {
    update: XOR<lokasi_gudangUpdateWithoutProdukInput, lokasi_gudangUncheckedUpdateWithoutProdukInput>
    create: XOR<lokasi_gudangCreateWithoutProdukInput, lokasi_gudangUncheckedCreateWithoutProdukInput>
    where?: lokasi_gudangWhereInput
  }

  export type lokasi_gudangUpdateToOneWithWhereWithoutProdukInput = {
    where?: lokasi_gudangWhereInput
    data: XOR<lokasi_gudangUpdateWithoutProdukInput, lokasi_gudangUncheckedUpdateWithoutProdukInput>
  }

  export type lokasi_gudangUpdateWithoutProdukInput = {
    nama_gudang?: StringFieldUpdateOperationsInput | string
    alamat_gudang?: StringFieldUpdateOperationsInput | string
    warna_gudang?: StringFieldUpdateOperationsInput | string
  }

  export type lokasi_gudangUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_gudang?: StringFieldUpdateOperationsInput | string
    alamat_gudang?: StringFieldUpdateOperationsInput | string
    warna_gudang?: StringFieldUpdateOperationsInput | string
  }

  export type vendorsUpsertWithoutProdukInput = {
    update: XOR<vendorsUpdateWithoutProdukInput, vendorsUncheckedUpdateWithoutProdukInput>
    create: XOR<vendorsCreateWithoutProdukInput, vendorsUncheckedCreateWithoutProdukInput>
    where?: vendorsWhereInput
  }

  export type vendorsUpdateToOneWithWhereWithoutProdukInput = {
    where?: vendorsWhereInput
    data: XOR<vendorsUpdateWithoutProdukInput, vendorsUncheckedUpdateWithoutProdukInput>
  }

  export type vendorsUpdateWithoutProdukInput = {
    nama_vendor?: StringFieldUpdateOperationsInput | string
    warna_vendor?: StringFieldUpdateOperationsInput | string
    alamat_vendor?: StringFieldUpdateOperationsInput | string
  }

  export type vendorsUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_vendor?: StringFieldUpdateOperationsInput | string
    warna_vendor?: StringFieldUpdateOperationsInput | string
    alamat_vendor?: StringFieldUpdateOperationsInput | string
  }

  export type produkCreateWithoutInboundInput = {
    nama_produk: string
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarCreateNestedManyWithoutProdukInput
    kategori: categoryCreateNestedOneWithoutProdukInput
    lokasi: lokasi_gudangCreateNestedOneWithoutProdukInput
    vendors: vendorsCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutInboundInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    outbound?: barang_keluarUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutInboundInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutInboundInput, produkUncheckedCreateWithoutInboundInput>
  }

  export type produkUpsertWithoutInboundInput = {
    update: XOR<produkUpdateWithoutInboundInput, produkUncheckedUpdateWithoutInboundInput>
    create: XOR<produkCreateWithoutInboundInput, produkUncheckedCreateWithoutInboundInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutInboundInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutInboundInput, produkUncheckedUpdateWithoutInboundInput>
  }

  export type produkUpdateWithoutInboundInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUpdateManyWithoutProdukNestedInput
    kategori?: categoryUpdateOneRequiredWithoutProdukNestedInput
    lokasi?: lokasi_gudangUpdateOneRequiredWithoutProdukNestedInput
    vendors?: vendorsUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutInboundInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateWithoutOutboundInput = {
    nama_produk: string
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    inbound?: barang_masukCreateNestedManyWithoutProdukInput
    kategori: categoryCreateNestedOneWithoutProdukInput
    lokasi: lokasi_gudangCreateNestedOneWithoutProdukInput
    vendors: vendorsCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutOutboundInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
    inbound?: barang_masukUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutOutboundInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutOutboundInput, produkUncheckedCreateWithoutOutboundInput>
  }

  export type produkUpsertWithoutOutboundInput = {
    update: XOR<produkUpdateWithoutOutboundInput, produkUncheckedUpdateWithoutOutboundInput>
    create: XOR<produkCreateWithoutOutboundInput, produkUncheckedCreateWithoutOutboundInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutOutboundInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutOutboundInput, produkUncheckedUpdateWithoutOutboundInput>
  }

  export type produkUpdateWithoutOutboundInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    inbound?: barang_masukUpdateManyWithoutProdukNestedInput
    kategori?: categoryUpdateOneRequiredWithoutProdukNestedInput
    lokasi?: lokasi_gudangUpdateOneRequiredWithoutProdukNestedInput
    vendors?: vendorsUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutOutboundInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    inbound?: barang_masukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyVendorsInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
  }

  export type produkUpdateWithoutVendorsInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUpdateManyWithoutProdukNestedInput
    kategori?: categoryUpdateOneRequiredWithoutProdukNestedInput
    lokasi?: lokasi_gudangUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutVendorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUncheckedUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateManyWithoutVendorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkCreateManyKategoriInput = {
    id?: number
    nama_produk: string
    vendorsId: number
    jumlah?: number
    lokasiId: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
  }

  export type produkUpdateWithoutKategoriInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUpdateManyWithoutProdukNestedInput
    lokasi?: lokasi_gudangUpdateOneRequiredWithoutProdukNestedInput
    vendors?: vendorsUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUncheckedUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    lokasiId?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkCreateManyLokasiInput = {
    id?: number
    nama_produk: string
    kategoriId: number
    vendorsId: number
    jumlah?: number
    gambar_produk?: string | null
    is_delete?: boolean
    public_id?: string | null
  }

  export type produkUpdateWithoutLokasiInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUpdateManyWithoutProdukNestedInput
    kategori?: categoryUpdateOneRequiredWithoutProdukNestedInput
    vendors?: vendorsUpdateOneRequiredWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutLokasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    outbound?: barang_keluarUncheckedUpdateManyWithoutProdukNestedInput
    inbound?: barang_masukUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateManyWithoutLokasiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kategoriId?: IntFieldUpdateOperationsInput | number
    vendorsId?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    gambar_produk?: NullableStringFieldUpdateOperationsInput | string | null
    is_delete?: BoolFieldUpdateOperationsInput | boolean
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type barang_keluarCreateManyProdukInput = {
    id?: number
    tanggal_keluar?: Date | string
    nominal_modal: number
    jumlah_barang_keluar: number
  }

  export type barang_masukCreateManyProdukInput = {
    id?: number
    tanggal_masuk?: Date | string
    nominal_modal: number
    jumlah_barang_masuk: number
  }

  export type barang_keluarUpdateWithoutProdukInput = {
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
  }

  export type barang_keluarUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
  }

  export type barang_keluarUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_keluar?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_keluar?: IntFieldUpdateOperationsInput | number
  }

  export type barang_masukUpdateWithoutProdukInput = {
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
  }

  export type barang_masukUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
  }

  export type barang_masukUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal_masuk?: DateTimeFieldUpdateOperationsInput | Date | string
    nominal_modal?: IntFieldUpdateOperationsInput | number
    jumlah_barang_masuk?: IntFieldUpdateOperationsInput | number
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