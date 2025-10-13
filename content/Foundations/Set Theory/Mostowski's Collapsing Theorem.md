Let $r$ be [[Foundations/Set Theory/Well-Founded]], [[Foundations/Set Theory/Extensional]] relation on a set $a$.
(Note that this implies $r$ is [[Foundations/Set Theory/Local]])
Then there is a transitive set $b$ and a bijection $f:a\to b$
such that:
$$
(\forall x\in a)(\forall y\in a)(x\ r\ y\iff f(x)\in f(y))
$$
Moreover, the pair $(b,f)$ is unique.
### Note
Similar to [[Foundations/Set Theory/Epsilon-recursion Theorem]] and [[Foundations/Set Theory/Principle of Epsilon-Induction]] 
we can define the same concepts for $r$ (as well as $r$-closure)
### Proof
Define $f$ by $r$-recursion
$$
(\forall x\in a)(f(x)=\{ f(y) : y\in a, r(y,x) \})
$$
and set $b=\{ f(x):x\in a \}$
Now verify the conditions.
Everything is straightforward except $f$ injective and $(b,f)$ unique
These we verify by $r$ induction.
