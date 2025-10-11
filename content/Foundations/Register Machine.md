Given a set of states $Q$ we define $Q$-instructions:
For a natural number $k\in \mathbb{N}$ and $a\in \Sigma$ (usually $\Sigma=\{ 0,1 \}$) 

| Instruction            | Interpretation                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| $+_{a}(k,q)$           | Add letter $a$ to the content of register $k$ and go to state $q$                                                                          |
| $?_{a}(k,q,q')$        | Check whether the last letter in register $k$ is $a$<br>- If so go to state $q$<br>- Otherwise, go to state $q'$                           |
| $?_{\epsilon}(k,q,q')$ | Check whether register $k$ is empty<br>- If so go to state $q$<br>- Otherwise, go to state $q'$                                            |
| $-(k,q,q')$            | Check whether register $k$ is empty<br>- If so go to state $q$<br>- Otherwise, remove the final letter of its content and go to state $q'$ |

### Definition
A pair $M=(Q,P)$ is called a register machine if $Q$ is a non-empty finite set of states with two special elements $q_{S}\neq q_{H}$ (start and halt states), and $P$ is a function with domain $Q$ and codomain the $Q$-instructions (so each $P(q)$ is a $Q$-instruction). 
The function $P$ is called the program of the register machine.
For a fixed $q\in Q$, we refer to $(q,P(q))$ as the program line. 

As $Q$ is finite, we can find the largest $k$ which appears in instructions $P(q)$ and we call this number the upper register index. (Note that this machine uses at most $n+1$ registers because we start from $0$)
[[Foundations/Computation Sequence]]
[[Foundations/Strong Equivalence of Register Machines]]
[[Foundations/Partial Function]]
[[Foundations/Question]]
## Standard operations
[[Foundations/Subroutine Lemma]]
[[Foundations/Case Distinction Lemma]]
[[Foundations/Repeat Lemma]]

## Computability
[[Foundations/Computable]]
[[Foundations/Computably Enumerable]]

## Operations on natural numbers
[[Foundations/Encoding Numbers in Binary Words]]
[[Foundations/Truncation of Register Machine]]
[[Foundations/Gödel's primitive recursive functions]]
[[Foundations/Partial Recursive Functions]]
[[Foundations/Splitting and Merging Words]]

## Coding Langauges
[[Foundations/Encoding Alphabets in Binary Words]]
[[Foundations/Encoding Register Machines]]
[[Foundations/The Software Principle]]
[[Foundations/The s-m-n Theorem]]
[[Foundations/Kleene's Recursion Theorem]]

## Misc
[[Foundations/Computability Hierarchy]]
[[Foundations/Reduction Function]]
[[Foundations/Turing Joint]]
[[Foundations/Complete Language]]
[[Foundations/Index Set]]
