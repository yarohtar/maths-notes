Can form the union of a set
$$
(\forall x)(\exists y)(\forall z)(z\in y\iff(\exists t)(t\in x\land z\in t))
$$
The set $y$ whose existence is asserted here is unique by (Ext)
We denote this by $\bigcup x$ (formally, we are introducing a unary operation symbol $\bigcup$ to the language of ZF)
So $\bigcup x$ is the union of the members of $x$ 

We write $a \cup b$ for $\bigcup \{ a,b \}$

#### Intersection
We can prove 
$$
(\forall x)(\neg(x=\emptyset)\implies(\exists y)(\forall z)(z\in y\iff(\forall t)(t\in x \implies z\in t)))
$$
Indeed, start with a nonempty set $x$ and form the set
$$
y=\left\{  z\in \bigcup x\mid (\forall t)(t\in x \implies z\in t)  \right\}
$$
using (Un) and (Sep). Technically, we work in a model here and then we deduce the sentence above by [[Notes/Gödel's Completeness Theorem for First-Order Logic]]

The unique set $y$ constructed here is denoted by $\bigcap x$
We write $a\cap b$ for $\bigcap \{ a,b \}$

We can now define the domain of a [[Notes/Function]] $f$ 
If $(x,y)\in f$, then since $(x,y)=\{ \{ x \},\{ x,y \} \}$
we have $x,y\in \bigcup \bigcup f$
So we can form the set 
$$
dom\ f=\left\{  x\in \bigcup \bigcup f\mid (\exists y)((x,y)\in f)  \right\}
$$
using (Un) and (Sep)

Formally, we introduce a unary operation symbol $dom$
Note that this is defined for any set $f$ but it only has a meaning for functions.
