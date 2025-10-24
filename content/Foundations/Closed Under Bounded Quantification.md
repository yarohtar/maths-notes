A class of formulas $\Gamma$ in a [[Foundations/First Order Logic/Language]] $\mathcal{L}$ is
closed under bounded quantification
if for any $\phi \in \Gamma$:
- $(\exists x\in y)\phi \in \Gamma$
- $(\forall x\in y)\phi \in \Gamma$
where $x\in y$ is some bound depending on the [[Foundations/First Order Logic/Language]] $\mathcal{L}$
In set theory, it means exactly $x\in y$.
In [[Foundations/First Order Logic/Peano Arithmetic]] it could mean $x<y$

### Lemma
Let $M$ be a [[Foundations/Transitive Model]] of $T\subseteq ZFC$.
Suppose $\phi$ is [[Foundations/Absolute]] for $M$.
Then $(\exists x\in y)\,\phi$ and $(\forall x\in y)\,\phi$ are [[Foundations/Absolute]] for $M$.
#### Proof
Let $\phi$ have $n$ [[Foundations/First Order Logic/Free Variable]]s, one of which is $x$
(otherwise we can't quantify over $x$)
By definition, we have for any $x_{1},\dots,x_{n}\in M$
$$
M\models\phi(x_{1},\dots,x_{n}) \iff V \models \phi(x_{1},\dots,x_{n})
$$
where $V$ is a [[Foundations/First Order Logic/Model]] of $ZFC$
Let $y\in M$.
##### $\exists \implies$
Suppose 
$$
M\models (\exists x\in y)\, \phi(x,x_{2},\dots,x_{n})
$$
Then for some $x\in M$ we have 
$$
M\models \phi(x,x_{2},\dots,x_{n})
$$
and by assumption
$$
V\models \phi(x,x_{2},\dots,x_{n})
$$
$M$ is a [[Foundations/Substructure]] of $V$ so $x\in y$ (in $V$) and thus
$$
V\models (\exists x\in y)\, \phi(x,x_{2},\dots,x_{n})
$$
##### $\exists \impliedby$
Suppose 
$$
V\models(\exists x\in y)\, \phi(x,x_{2},\dots,x_{n})
$$
Then pick an $x\in V$ such that $x\in y$ and $\phi(x,x_{2},\dots,x_{n})$.
As $y\in M$ by assumption, and $M$ is [[Foundations/Set Theory/Transitive\|Transitive]], 
it has to be that $x\in M$ and thus $M\models \phi(x,x_{2},\dots,x_{n})$.
Hence we are done as
$$
M\models(\exists x\in y)\, \phi(x,x_{2},\dots,x_{n})
$$
which works for any $y,x_{2},\dots,x_{n}$ in $M$
##### $\forall \implies$
Similar to $\exists \impliedby$.
##### $\forall \impliedby$
Similar to $\exists \implies$.
