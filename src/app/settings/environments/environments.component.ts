import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CloudformationParameter } from './models/cloudformationparameters';
import { SlackHookUrl } from './models/slackhookurl';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  environmentName: string;
  activeId = 1;
  cloudformationParameters: CloudformationParameter[] = [
    {
      key: 'EnvironmentName',
      value: 'Budapest'
    },
    {
      key: 'SumoLogicURL',
      value: 'https://www.sumologic.com/http-collector/whatever-id'
    }
  ];
  slackHookUrls: SlackHookUrl[] = [{ url: "https://slack.com/hook/cdcsnd4fh4/" }];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.environmentName = params.env;
    });
  }

  addCloudformationParameter(): void {
    this.cloudformationParameters.push({ key: '', value: '' });
  }

  removeCloudformationParameter(cfParamToRemove: string): void {
    this.cloudformationParameters = this.cloudformationParameters.filter(x => x.key !== cfParamToRemove);
  }

  addSlackHookUrl(): void {
    this.slackHookUrls.push({ url: '' });
  }

  removeSlackHook(urlToRemove: string): void {
    this.slackHookUrls = this.slackHookUrls.filter(x => x.url !== urlToRemove);
  }
}
