// prettier-ignore
/**
 * Type Nullable represents empty values that may occur in TypeScript.
 *
 * @remarks
 * TypeORM sometimes returns `null` where type explicitly says that value will
 * be `undefined`. So you have to write some horrible unions like this:
 * ```
 * let x: User | null | undefined = await this.repository.findOneBy({ id: 1 });
 * ```
 * Nullable is to get rid of this. E.g:
 * ```
 * let x: Nullable<User> = await this.repository.findOneBy({ id: 1 });
 * ```
 *
 * @remarks
 * `Maybe<T>` would be a better name but I want to preserve it for the future,
 * for more elegant solution and implementation.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Nullable<T> =
	| T
	| null
	| undefined;
