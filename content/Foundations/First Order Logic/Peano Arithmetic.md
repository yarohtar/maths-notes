We aim to axiomatize the set of naturals 
The language consists of $\Omega=\{ 0,s,+,\times \}$ and $\Pi=\emptyset$
with arities of $0,s,+,\times$ being $0,1,2,2$ respectively

Peano Arithmetic consists of the following sentences:
$(\forall x)\neg(sx=0)$
$(\forall x)(\forall y)(sx=sy\implies x=y)$
$(\forall x)(x+0=x)$
$(\forall x)(\forall y)(x+sy=s(x+y))$
$(\forall x)(x\times 0=0)$
$(\forall x)(\forall y)(x\times sy=x\times y+x)$
$(\forall y_{1})\dots(\forall y_{n})[(p[0/x]\land(\forall x)(p\implies p[sx /x])\implies(\forall x)p)]$
for every formula $p$ with $FV(p)=\{x,y_{1},\dots,y_{n}\}$

Note that by [[Foundations/First Order Logic/The Upwards Löwenheim-Skolem Theorem]] there is an uncountable model of PA.
This is because the induction is not strong enough. 
The 'true' induction is
$$
(\forall A\subseteq \mathbb{N}_{0})((0\in A\land(\forall x)(x\in A\implies sx\in A))\implies A=\mathbb{N}_{0})
$$
But we cannot quantify over subsets of a structure.
Since the language of PA is countable, 
the induction axiom-scheme only captures countably many subsets of $\mathbb{N}_{0}$
### Definition
A subset $A\subseteq \mathbb{N}_{0}$ is definable in PA if there's a formula $p$ in PA
with one free variable such that $A=p_{\mathbb{N}_{0}}$

[[Foundations/First Order Logic/Gödel's Incompleteness Theorems]] imply that PA is not a complete theory. 
So there is a formula $p$ that holds in $\mathbb{N}_{0}$ but $PA\not\vdash p$ (or $PA\vdash \bot$)

