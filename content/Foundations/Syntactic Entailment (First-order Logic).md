## Axioms
1. $p\implies(q\implies p)$
2. $(p\implies(q\implies r))\implies((p\implies q)\implies(p\implies r))$
3. $\neg \neg p\implies p$
4. $(\forall x)(x=x)$
5. $(\forall x)(\forall y)((x=y)\implies(p\implies p[y/ x]))$
(where $p$ is any formula with no bound occurrence of $y$)
6. $(\forall x)p\implies p[t/ x]$
($p$ is a formula with $x\in FV(p)$ and $t$ is a term no variable of which occurs bound in $p$)
7. $(\forall x)(p\implies q)\implies(p\implies(\forall x)q)$
($p,q$ are formulae, $x\in FV(q)$, $x$ does not occur free in $p$)
## Rules of deduction
Modus ponens (MP): from $p$ and $p\implies q$, can deduce $q$ 
Generalisation (Gen): from $p$ with $x\in FV(p)$, can deduce $(\forall x)p$ provided $x$ does not occur free in any premiss used in the proof of $p$ 

### Definition
Let $S$ be a set of formulae in a language $L$ and $p$ be a formula in $L$. A proof of $p$ from $S$ is a finite sequence $t_{1}\dots t_{n}$ in $L$ s.t. $t_{n}=p$ and for every $i$:
1. either $t_{i}$ is an axiom, or
2. $t_{i}$ is a premiss (member of $S$), or
3. $t_{i}$ follows from modus ponens
4. $t_{i}$ follows by Generalisation ($\exists j<i$, s.t. $t_{i}=(\forall x)t_{j}$, $x\in FV(t_{j})$ $x$ is not free in any premiss $t_{k}$ for $k\leq j$)
We write $S\vdash p$.

[[Foundations/Deduction Theorem (First-order Logic)]]