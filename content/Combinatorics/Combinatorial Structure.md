---
{"publish":true,"aliases":"Structure","created":"2025-10-30T11:34:52.834+00:00","cssclasses":""}
---

Let $R$ be a [[Algebra/Ring Theory/Ring\|Ring]] containing $\mathbb{Q}$.
A structure $\mathcal{A}=(A,v)$ consists of a countable set $A$ of combinatorial objects
equipped with a valuation $v:A\to R[x]$ such that 
$$
v(\alpha) = w(\alpha)x^{n}
$$
where $n$ is called the size of $\alpha$ and $w(\alpha)\in R$ is called the weight 
(often $w(\alpha)=1$ for all $\alpha$)
and moreover 
$$
A_{n} = \{ \alpha \in A \text{ of size }n \}
$$
is finite for all $n$.
We define its [[Algebra/Ordinary Generating Function]]
and [[Combinatorics/Exponential Generating Function]]
### Definition
Given structures $\mathcal{A}=(A,v_{A})$ and $\mathcal{B}(B,v_{B})$ define the following

| Operation         | Symbol                          | Object                               | Valuation                                      | Conditions                               | [[Algebra/Ordinary Generating Function\|OGF]]                |
| ----------------- | ------------------------------- | ------------------------------------ | ---------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| Disjoint union    | $\mathcal{A}+\mathcal{B}$       | $A\cup B$                            | $v_{A}\cup v_{B}$                              | $A,B$ disjoint                           | $f_{\mathcal{A}}+f_{\mathcal{B}}$                    |
| Cartesian product | $\mathcal{A}\times \mathcal{B}$ | $A\times B$                          | $v_{A}\cdot v_{B}$                             | none                                     | $f_{\mathcal{A}}\cdot f_{\mathcal{B}}$               |
| Sequence          | $\mathcal{A}^{*}$               | $\bigcup_{k\geq 0} A^{k}$            | $\prod_{i=1}^{k}v_{A}(\alpha_{i})$             | $\varepsilon,A,A\times A \dots$ disjoint | $\frac{1}{1-f_{\mathcal{A}}}$                        |
| Composition       | $\mathcal{B}(\mathcal{A})$      | $\bigcup_{k\geq 0}B_{k}\times A^{k}$ | $w_{B}(B_{k})\prod_{i=1}^{k}v_{A}(\alpha_{i})$ | $A,A\times A, \dots$ disjoint            | $b_{0}+\sum_{k\geq 1} b_{k}(f_{\mathcal{A}}(x))^{k}$ |
[[Combinatorics/Labelled Product]]
