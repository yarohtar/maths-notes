Let $\Omega$ be a finite set of symbols.
Take a nonempty string $\alpha\in \Omega^+$, and a string $\beta \in \Omega ^{*}$, then $\alpha\to \beta$ is called a rewrite rule (or production rule)
The set of rewrite rules is $\Omega^+\times \Omega ^{*}$ (this is countable)

Given a set of terminal symbols $\Sigma$ and variables $V$ with $\Omega=\Sigma \cup V$ we define the following:
### Noncontracting
A production rule $\alpha\to \beta$ is called noncontracting if $\lvert \alpha \rvert\leq \lvert \beta \rvert$
### Context-free
A production rule $A\to \beta$ is called context free if $A\in V$ and $\lvert \beta \rvert\geq1$
### Regular
Production rules $A\to a$ and $A\to aB$ are called regular if $A,B\in V$ and $a\in \Sigma$