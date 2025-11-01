Let $S$ be a [[Foundations/Propositional Logic/Consistent]] [[Foundations/First Order Logic/Theory]] in a first-order language $L=L\left( \Omega,\prod \right)$
Then $S$ has a model.

#### Idea
We build a model from the language itself 
To begin with, we let $A$ be the set of closed terms of $L$, i.e. terms with no variables
We turn this into a [[Foundations/First Order Logic/Structure]] in the obvious way

$A$ is still not a model (e.g. $1+0$ and $1$ are not equal in $A$)
Define equivalence relation $\sim$ on $A$ by 
$s\sim t$ if and only if $T\vdash(s=t)$ 
(where $s,t \in A$)
Replace $A$ with $A /_{\sim}$
Two issues remain

Firstly, in general, $T$ is not complete (i.e. there are sentences $p$ where neither $T\vdash p$ nor $T\vdash \neg p$)
Remedy: Given consistent theory $S$ there is a consistent, complete $\bar{S}\supseteq S$

Secondly, we are missing some elements that are guaranteed by $(\exists x)p$ where $p$ is for example $x\cdot x=1+1$
Remedy: We add a witness, i.e. a new constant $c$ to $L$ (the new language is $L'=L\left( \Omega \cup \{ c \},\prod \right)$) and a new sentence to $T$ to obtain $T'=T\cup \{ p[c /x] \}$

#### Proof (NONEXAMINABLE)
We start with two observations
1. Let $S$ be a consistent theory, $p$ be a sentence
   Then one of $S\cup \{ p \}$ and $S\cup \{ \neg p \}$ is consistent
   If not, then by [[Foundations/First Order Logic/Deduction Theorem]] 
   $S\vdash \neg p$ and $S\vdash \neg \neg p$ and hence $S\vdash \bot$ by (MP)
   By [[Foundations/Ordinals/Zorn's Lemma]] there is a maximal consistent theory $\bar{S}\supseteq S$. 
   Then for every sentence $p$, either $p \in \bar{S}$ or $\neg p \in \bar{S}$
   In particular $\bar{S}$ is complete
2. Suppose $S\vdash(\exists x)p$ where $p$ is a formula with $FV(p)=\{ x \}$. Add a new constant $c$ to $L$. Then $S\cup \{ p[c/ x] \}$ is consistent
   If not, then by [[Foundations/First Order Logic/Deduction Theorem]] $S\vdash \neg p[c /x]$
   Since $c$ does not appear in $S$ it follows that $S\vdash \neg p$
   Then $S\vdash(\forall x)\neg p$ by (Gen). 
   But $S\vdash \neg(\forall x)\neg p$
   We do this for every theorem of $S$ of the form $(\exists x)p$ to obtain a new language $\bar{L}=L\left( \Omega \cup C,\prod \right)$ where $C$ is a set of new constants (disjoint from $\Omega$, $\prod$) and a new theory $\bar{S}$ s.t. $\bar{S}\supseteq S$, $\bar{S}$ is consistent and $\bar{S}$ has witnesses for $S$ 
We now start with a consistent theory $S_{0}=S$ in $L_{0}=L\left( \Omega,\prod \right)$ and by induction construct theories $S_{0}\subseteq S_{1}\subseteq T_{1}\subseteq S_{2}\subseteq T_{2}\subseteq\dots$
and new languages $L_{n}=L\left( \Omega \cup C_{1}\cup\dots \cup C_{n},\prod \right)$ where $C_{1},C_{2},\dots$ are pairwise disjoint sets of constants (also disjoint from $\Omega$, $\Pi$)
s.t. for all $n$, $S_{n}$ is complete, consistent theory in $L_{n-1}$ 
and $T_{n}$ is a consistent theory in $L_{n}$ which has witnesses for $S_{n}$.
Set $L^{*}=\bigcup L_{n}$ and $S^{*}=\bigcup S_{n}$
Easy to check that $S^{*}$ is a consistent theory in $L^{*}$ which contains $S$, is complete and has witnesses.

Now WLOG $S^{*}=S$ and $L^{*}=L$

We let $A$ be the set of equivalence classes of closed terms in $L$ where $s\sim t$ if and only if $S\vdash s=t$
We make $A$ an $L$-[[Foundations/First Order Logic/Structure\|Structure]]:
$$
\omega_{A}([t_{1}],\dots,[t_{n}])=[\omega t_{1}\dots t_{n}]
$$
$$
\phi_{A}([t_{1}],\dots,[t_{n}])=1$ iff $S\vdash \phi t_{1}\dots t_{n}
$$
(lots of checking to do at this stage to prove this is all well defined)

Then prove by induction on terms: if $s$ is a term with variables in the set $\{ x_{1},\dots,x_{n} \}$
then $s_{A}([t_{1}],\dots,[t_{n}])=s[t_{1}/x_{1},\dots t_{n} /x_{n}]$
If $s$ is a closed term, then $s_A=[s]$

Similarly, for any formula $p$ with $FV(p)\subseteq \{ x_{1},\dots,x_{n} \}$
$p_{A}([t_{1}],\dots,[t_{n}])=1$ iff $S\vdash p[t_{1} /x_{1},\dots,t_{n} /x_{n}]$
In particular, if $p \in S$ then $S\vdash p$ so $p_{A}=1$
Thus $A$ is a model of $S$ 