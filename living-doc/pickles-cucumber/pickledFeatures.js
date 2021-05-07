jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "fixme.feature",
      "Feature": {
        "Name": "fixme",
        "Description": "Demo how failing test will appear on Living Documentation.",
        "FeatureElements": [
          {
            "Name": "Failing test demo",
            "Slug": "failing-test-demo",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Navigate to the sandbox",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I am on the sandbox page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "The page header should be \"WRONG VALUE\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "integrations\\apotti-integration.feature",
      "Feature": {
        "Name": "Apotti integration",
        "Description": "Orders and results are syncronized with Apotti.",
        "FeatureElements": [
          {
            "Name": "Order from Apotti",
            "Slug": "order-from-apotti",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "there is an HL7 order message coming from Apotti",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "HL7 message reaches integration point",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "order is saved to database",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": [
          "@priority-essential"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "integrations\\omakanta-integration.feature",
      "Feature": {
        "Name": "Omakanta integration",
        "Description": "Results are saved to Omakanta",
        "FeatureElements": [
          {
            "Name": "Check results are in Omakanta",
            "Slug": "check-results-are-in-omakanta",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "there is a result",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "it qualifies rules to send to Omakanta",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "it will appear in Omakanta",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@MANUAL",
              "@PERO-57"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": [
          "@priority-high",
          "@technical-requirement"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "authorization.feature",
      "Feature": {
        "Name": "Only authorized users shall be able to access the application",
        "Description": "User authentication is required",
        "FeatureElements": [
          {
            "Name": "User without username",
            "Slug": "user-without-username",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a user without username and password",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "a user tries to login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "login will be rejected",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@PERO-34"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Name": "User with username",
            "Slug": "user-with-username",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "a user with username and password",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "a user tries to login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "login succeeds",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@PERO-34"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": [
          "@priority-essential",
          "@security"
        ]
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "sandbox.feature",
      "Feature": {
        "Name": "Sandbox",
        "Description": "",
        "FeatureElements": [
          {
            "Name": "Sandbox",
            "Slug": "sandbox",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "Navigate to the sandbox",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I am on the sandbox page",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "The page header should be \"Sandbox\"",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": true,
              "WasSuccessful": true,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": true,
          "WasSuccessful": true,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": true,
        "WasSuccessful": true,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@priority-essential",
        "Total": 3,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 3
      },
      {
        "Tag": "@priority-high",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@technical-requirement",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@security",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Tag": "@MANUAL",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@PERO-57",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@PERO-34",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      }
    ],
    "Folders": [
      {
        "Folder": "fixme.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 1,
        "Inconclusive": 0
      },
      {
        "Folder": "integrations",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "authorization.feature",
        "Total": 2,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 2
      },
      {
        "Folder": "sandbox.feature",
        "Total": 1,
        "Passing": 1,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "fixme.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "integrations",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "authorization.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "sandbox.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 6,
      "Passing": 1,
      "Failing": 1,
      "Inconclusive": 4
    },
    "Features": {
      "Total": 5,
      "Passing": 1,
      "Failing": 1,
      "Inconclusive": 3
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "fixme.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "integrations",
        "Total": 2,
        "Automated": 1,
        "Manual": 1,
        "NotTested": 0
      },
      {
        "Folder": "authorization.feature",
        "Total": 2,
        "Automated": 2,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "sandbox.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "GeneratedOn": "31 March 2021 16:10:09"
  }
});