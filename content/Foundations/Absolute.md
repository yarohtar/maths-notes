Let $M$ and $N$ be [[Foundations/First Order Logic/Structure\|Structure]]s for a [[Foundations/First Order Logic/Language]] $\mathcal{L}$ such that $M\subseteq N$
Let $\phi$ be a formula in $n$ [[Foundations/First Order Logic/Free Variable]]s.
We say that $\phi$ is absolute between $M$ and $N$ if 
it is [[Foundations/Upwards Absolute]] and [[Foundations/Downwards Absolute]] i.e.
$$
\forall x_{1},\dots,x_{n} \in M\quad %quad
M\models\phi(x_{1},\dots,x_{n}) \iff N\models\phi(x_{1},\dots,x_{n})
$$
where we use $M\models \phi$ to mean $\phi$ is [[Foundations/First Order Logic/Satisfied]] in $M$

## Theorem
If $M$ is a [[Foundations/Substructure]] of $N$, 
then all quantifier free formulas are absolute between $M$ and $N$
## Theorem
If $\phi$ and $\psi$ are [[Foundations/Absolute]] and 
$$
T\vdash \exists x\,\phi \iff \forall x\, \psi
$$
then both $\exists x\,\phi$ and $\forall x\,\psi$ are [[Foundations/Absolute]] for [[Foundations/First Order Logic/Model]]s of $T$.
We call this the $\Delta_{1}$ trick.
### Proof
Let $N$ be a [[Foundations/First Order Logic/Model]] of $T$ and $M\subseteq N$ a [[Foundations/Substructure]] of $N$
such that $M\models T$
Firstly, $\phi$ is [[Foundations/Upwards Absolute]] so $\exists x\,\phi$ is [[Foundations/Upwards Absolute]].
Suppose $M\models \forall x\,\psi$. 
Then $M\models \exists x\,\phi$ and thus $N\models \exists x\,\phi$
But then $N\models \forall x\,\psi$ and thus $\forall x\,\psi$ is [[Foundations/Upwards Absolute]].
But $\forall x\,\psi$ is [[Foundations/Downwards Absolute]] because $\psi$ is [[Foundations/Downwards Absolute]].
So $\forall x\,\psi$ is absolute and so is $\exists x\,\phi$ (by similar arguments).
### (Non)example
Language of set theory has symbols $\{ \in \}$
Take
$$
\varepsilon_{0}(x) := (\forall z)(\neg z \in x)
$$
meaning $x=\varnothing$ 
(note in particular that $x=\varnothing$ cannot be quantifier free)
Also take
$$
\varepsilon_{1}(x):=(\forall z)(z\in x \implies \varepsilon_{0}(z))
$$
meaning $x=\{ \varnothing \}$

Take a model
$$
M\models ZFC
$$
Let $m$ be such that $M\models\varepsilon_{0}(m)$ (exists by [[Foundations/Set Theory/Empty-set axiom]])
and $n$ such that $M\models\varepsilon_{1}(n)$ (exists by [[Foundations/Set Theory/Pair-set axiom]] ...)
Then take $N=M\setminus\{ m \}$
But then $N\models\varepsilon_{0}(n)$ !!
and thus $\varepsilon_{0}$ is not absolute in the [[Foundations/First Order Logic/Language]] of set theory.
